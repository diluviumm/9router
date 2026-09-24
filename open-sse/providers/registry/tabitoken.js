export default {
  id: "tabitoken",
  priority: 50,
  alias: "tabitoken",
  display: {
    name: "TabiToken",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "TA",
    website: "https://tabitoken.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://tabitoken.com/v1/messages",
    validateUrl: "https://tabitoken.com/v1/models",
  },
  models: [
    { id: "claude-opus-5", name: "Claude Opus 5" },
    { id: "claude-opus-5-thinking", name: "Claude Opus 5 (Thinking)" },
    { id: "claude-opus-4-8", name: "Claude Opus 4.8" },
    { id: "claude-opus-4-8-thinking", name: "Claude Opus 4.8 (Thinking)" },
  ],
}
