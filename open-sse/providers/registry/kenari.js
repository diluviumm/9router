export default {
  id: "kenari",
  priority: 50,
  alias: "kenari",
  display: {
    name: "Kenari",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "KE",
    website: "https://kenari.id",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://kenari.id/v1/chat/completions",
    validateUrl: "https://kenari.id/v1/models",
  },
  models: [
  ],
}
