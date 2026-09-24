export default {
  id: "ai21",
  priority: 50,
  hasFree: true,
  alias: "ai21",
  display: {
    name: "AI21 Labs",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AL",
    website: "https://www.ai21.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.ai21.com/studio/v1/chat/completions",
    validateUrl: "https://api.ai21.com/studio/v1/models",
  },
  models: [
    { id: "jamba-large-1.7", name: "jamba-large-1.7" },
    { id: "jamba-mini-2", name: "jamba-mini-2" },
  ],
}
