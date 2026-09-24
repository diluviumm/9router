export default {
  id: "lemonade",
  priority: 50,
  alias: "lemonade",
  display: {
    name: "Lemonade Server",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LS",
    website: "https://lemonade-server.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://localhost:13305/api/v1",
    validateUrl: "http://localhost:13305/api/v1/models",
  },
  models: [
  ],
}
