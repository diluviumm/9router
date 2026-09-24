export default {
  id: "blackbox-web",
  priority: 50,
  alias: "blackbox-web",
  display: {
    name: "Blackbox Web (Subscription)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "BW",
    website: "https://app.blackbox.ai",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://app.blackbox.ai/api/chat",
  },
  models: [
    { id: "gpt-4-turbo", name: "GPT-4 Turbo" },
    { id: "gpt-4", name: "GPT-4" },
    { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
    { id: "claude-3-opus", name: "Claude 3 Opus" },
    { id: "claude-3-sonnet", name: "Claude 3 Sonnet" },
    { id: "gemini-pro", name: "Gemini Pro" },
  ],
}
