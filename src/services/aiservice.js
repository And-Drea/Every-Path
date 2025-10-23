export async function sendChatMessage(userInput) {
  
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant that helps answer questions about resume bulding, giving suggestions, given tips, given formas. DO NOT wirte a full resume." },
          { role: "user", content: userInput },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      reply:
        data?.choices?.[0]?.message?.content?.trim() ||
        "Hmm, I'm not sure how to answer that.",
    };
  } catch (err) {
    console.error("Chat error:", err);
    throw new Error("⚠️ Error: Unable to reach AI server.");
  }
}
