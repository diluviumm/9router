export default {
  id: "eurouter",
  priority: 50,
  alias: "eurouter",
  display: {
    name: "EURouter",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "EU",
    website: "https://eurouter.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.eurouter.ai/v1/chat/completions",
    validateUrl: "https://api.eurouter.ai/v1/models",
  },
  models: [
  ],
}
