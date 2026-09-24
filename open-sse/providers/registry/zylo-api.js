export default {
  id: "zylo-api",
  priority: 50,
  hasFree: true,
  alias: "zylo-api",
  display: {
    name: "Zylo API",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "ZA",
    website: "https://zyloai.net",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.zyloai.net/v1/chat/completions",
    validateUrl: "https://api.zyloai.net/v1/models",
  },
  models: [
  ],
}
