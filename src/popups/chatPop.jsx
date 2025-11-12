import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { sendChatMessage } from "../services/aiservice";
import "../styles/chatPop.css";

export default function ChatPopup({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const containerRef = useRef(null);
  const dragControls = useDragControls();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const data = await sendChatMessage(userMsg.text);
      const replyText = data?.reply ?? data?.message ?? "(no reply)";
      setMessages((prev) => [...prev, { sender: "bot", text: replyText }]);
    } catch (err) {
      const msg = err?.message || "Chat request failed";
      setError(msg);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error: Unable to reach AI." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // ======= Formatting utilities (escape + lightweight markdown -> HTML) =======
  const escapeHtml = (unsafe) =>
    unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const formatMessage = (rawText) => {
    if (!rawText) return "";

    // 1) Work on a local copy and escape everything first to prevent backend HTML injection
    let text = String(rawText);
    text = text.replace(/\r\n/g, "\n"); // normalize newlines
    // We'll escape by default, but we'll reinsert safe HTML that we generate.
    text = escapeHtml(text);

    // 2) Extract fenced code blocks ```...``` and replace with placeholders
    const codeBlocks = [];
    text = text.replace(/```([\s\S]*?)```/g, (m, codeContent) => {
      const id = codeBlocks.length;
      // codeContent already escaped because we escaped the whole text - keep it escaped
      codeBlocks.push(`<pre class="chat-code-block"><code>${codeContent}</code></pre>`);
      return `@@CODE_BLOCK_${id}@@`;
    });

    // 3) Inline code: `code`
    text = text.replace(/`([^`]+)`/g, (m, c) => `<code class="chat-inline-code">${c}</code>`);

    // 4) Headings (simple)
    text = text.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    text = text.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    text = text.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // 5) Bold **text** and italics *text*
    text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");

    // 6) Links: [text](url)
    text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer noopener">$1</a>');

    // 7) Lists: convert lines starting with - or * into UL groups
    // We'll transform by lines to cluster consecutive list items.
    const lines = text.split("\n");
    let outLines = [];
    let inList = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      const matchList = trimmed.match(/^[-*]\s+(.*)/);
      if (matchList) {
        if (!inList) {
          inList = true;
          outLines.push("<ul>");
        }
        outLines.push(`<li>${matchList[1]}</li>`);
      } else {
        if (inList) {
          outLines.push("</ul>");
          inList = false;
        }
        // empty line -> paragraph break later; keep as-is now
        outLines.push(trimmed);
      }
    }
    if (inList) outLines.push("</ul>");

    // 8) Join back and turn double newlines into paragraphs
    let joined = outLines.join("\n");

    // Replace 2+ newlines with paragraph separators, single newline -> <br/>
    joined = joined.replace(/\n{2,}/g, "</p><p>"); // multi newlines -> paragraph
    joined = joined.replace(/\n/g, "<br/>"); // single newline -> break

    // 9) Ensure everything is wrapped in <p> unless it's already a block element
    // We'll split by paragraphs and wrap lines that are not block-level tags.
    const blocks = joined.split(/<\/p><p>/g).map((blk) => {
      const trimmed = blk.trim();
      if (!trimmed) return "";
      // If it starts with a block tag, return as is
      if (/^(<(ul|li|h1|h2|h3|pre|blockquote|img|div|table|ul|ol))/i.test(trimmed)) {
        return trimmed;
      }
      // otherwise ensure it's a paragraph
      // Also avoid double-wrapping if already starts with <p>
      if (/^<p>/.test(trimmed) && /<\/p>$/.test(trimmed)) return trimmed;
      return `<p>${trimmed}</p>`;
    });

    let finalHtml = blocks.join("");

    // 10) Reinsert code blocks placeholders
    finalHtml = finalHtml.replace(/@@CODE_BLOCK_(\d+)@@/g, (m, idx) => codeBlocks[Number(idx)] || "");

    return finalHtml;
  };

  // ======= Render =======
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          dragConstraints={{
            top: 0,
            left: 0,
            right: window.innerWidth - 350,
            bottom: window.innerHeight - 100,
          }}
          className="chat-popup-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="chat-panel">
            <div
              className="chat-header"
              onPointerDown={(event) => dragControls.start(event)}
            >
              <h3 className="font-semibold">REMU</h3>
              <button onClick={onClose} className="text-white hover:text-black">
                ×
              </button>
            </div>

            <div ref={containerRef} className="chat-messages" aria-live="polite">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`chat-bubble ${m.sender === "user" ? "user" : "bot"}`}
                  // safe because formatMessage escapes backend HTML before constructing allowed tags
                  dangerouslySetInnerHTML={{ __html: formatMessage(m.text) }}
                />
              ))}

              {loading && <div className="chat-helper">Loading...</div>}
              {error && (
                <div className="chat-helper" style={{ color: "#f87171" }}>
                  {error}
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="chat-input-row">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="chat-input"
                disabled={loading}
                aria-label="Chat input"
              />
              <button
                type="submit"
                className="chat-send-btn"
                disabled={loading}
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
