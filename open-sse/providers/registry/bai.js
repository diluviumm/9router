export default {
  id: "bai",
  priority: 50,
  alias: "bai",
  display: {
    name: "b.ai",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "BA",
    website: "https://b.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.b.ai/v1/chat/completions",
    validateUrl: "https://api.b.ai/v1/models",
  },
  models: [
  ],
}
