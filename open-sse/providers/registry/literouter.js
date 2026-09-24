export default {
  id: "literouter",
  priority: 50,
  hasFree: true,
  alias: "literouter",
  display: {
    name: "LiteRouter",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LI",
    website: "https://literouter.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.literouter.com/v1/chat/completions",
    validateUrl: "https://api.literouter.com/v1/models",
  },
  models: [
  ],
}
