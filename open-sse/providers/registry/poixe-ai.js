export default {
  id: "poixe-ai",
  priority: 50,
  hasFree: true,
  alias: "poixe-ai",
  display: {
    name: "Poixe AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "PA",
    website: "https://poixe.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.poixe.com/v1/chat/completions",
    validateUrl: "https://api.poixe.com/v1/models",
  },
  models: [
  ],
}
