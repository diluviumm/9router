export default {
  id: "greenpt",
  priority: 50,
  alias: "greenpt",
  display: {
    name: "GreenPT",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "GR",
    website: "https://greenpt.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.greenpt.ai/v1/chat/completions",
    validateUrl: "https://api.greenpt.ai/v1/models",
  },
  models: [
  ],
}
