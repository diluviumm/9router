export default {
  id: "unorouter",
  priority: 50,
  hasFree: true,
  alias: "unorouter",
  display: {
    name: "UnoRouter",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "UN",
    website: "https://unorouter.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.unorouter.com/v1/chat/completions",
    validateUrl: "https://api.unorouter.com/v1/models",
  },
  models: [
  ],
}
