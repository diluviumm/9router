export default {
  id: "void-ai",
  priority: 50,
  hasFree: true,
  alias: "void-ai",
  display: {
    name: "Void AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "VA",
    website: "https://voidai.app",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.voidai.app/v1/chat/completions",
    validateUrl: "https://api.voidai.app/v1/models",
  },
  models: [
  ],
}
