export default {
  id: "ofoxai",
  priority: 50,
  hasFree: true,
  alias: "ofoxai",
  display: {
    name: "OfoxAI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "OF",
    website: "https://ofox.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.ofox.ai/v1/chat/completions",
    validateUrl: "https://api.ofox.ai/v1/models",
  },
  models: [
  ],
}
