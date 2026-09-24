export default {
  id: "plamo",
  priority: 50,
  alias: "plamo",
  display: {
    name: "PLaMo",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "PL",
    website: "https://plamo.preferredai.jp/api",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.platform.preferredai.jp/v1/chat/completions",
    validateUrl: "https://api.platform.preferredai.jp/v1/models",
  },
  models: [
    { id: "plamo-3.0-prime", name: "PLaMo 3.0 Prime" },
  ],
}
