export default {
  id: "coze",
  priority: 50,
  hasFree: true,
  alias: "coze",
  display: {
    name: "Coze",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "CO",
    website: "https://coze.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.coze.com/v1/chat/completions",
    validateUrl: "https://api.coze.com/v1/models",
  },
  models: [
    { id: "claude-3-7-sonnet-20250514", name: "Claude 3.7 Sonnet" },
  ],
}
