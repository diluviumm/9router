export default {
  id: "digitalocean",
  priority: 50,
  alias: "digitalocean",
  display: {
    name: "DigitalOcean",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "DI",
    website: "https://docs.digitalocean.com/products/ai-platform/",
    notice: {
      apiKeyUrl: "https://cloud.digitalocean.com/account/api/tokens",
    },
  },
  category: "apikey",
  transport: {
    baseUrl: "https://inference.do-ai.run/v1/chat/completions",
    validateUrl: "https://inference.do-ai.run/v1/models",
  },
  models: [
  ],
}
