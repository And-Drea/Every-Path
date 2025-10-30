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
  const dragControls = useDragControls(); // 👈 controls dragging manually

  // Auto-scroll to bottom when new messages arrive
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
      // Prefer `reply`, but fall back to `message` or a default string
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          drag
          dragControls={dragControls} // 👈 attach the control
          dragListener={false} // 👈 disable automatic drag from anywhere
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
            {/* Header (only draggable area) */}
            <div
              className="chat-header"
              onPointerDown={(event) => dragControls.start(event)} // 👈 start drag here
            >
              <h3 className="font-semibold">REMU</h3>
              <button onClick={onClose} className="text-white hover:text-black">
                ×
              </button>
            </div>

            {/* Messages */}
            <div ref={containerRef} className="chat-messages" aria-live="polite">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`chat-bubble ${m.sender === "user" ? "user" : "bot"}`}
                >
                  {m.text}
                </div>
              ))}

              {loading && <div className="chat-helper">Loading...</div>}
              {error && (
                <div className="chat-helper" style={{ color: "#f87171" }}>
                  {error}
                </div>
              )}
            </div>

            {/* Input */}
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
