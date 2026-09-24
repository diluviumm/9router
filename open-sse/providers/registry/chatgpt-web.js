export default {
  id: "chatgpt-web",
  priority: 50,
  alias: "chatgpt-web",
  display: {
    name: "ChatGPT Web (Clean Room)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "CW",
    website: "https://chatgpt.com",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://chatgpt.com",
  },
  models: [
    { id: "gpt-5-6", name: "GPT-5.6 Sol \u2014 Instant" },
    { id: "gpt-5-6-thinking", name: "GPT-5.6 Sol \u2014 Thinking" },
    { id: "gpt-5-6-pro", name: "GPT-5.6 Sol \u2014 Pro" },
    { id: "gpt-5.6-luna-free", name: "GPT-5.6 Luna \u2014 Free" },
    { id: "gpt-5.6-luna-free-thinking", name: "GPT-5.6 Luna \u2014 Free Thinking" },
    { id: "gpt-5-5-instant", name: "GPT-5.5 \u2014 Instant" },
    { id: "gpt-5-5-thinking", name: "GPT-5.5 \u2014 Thinking" },
    { id: "gpt-5-5-pro", name: "GPT-5.5 \u2014 Pro" },
  ],
}
