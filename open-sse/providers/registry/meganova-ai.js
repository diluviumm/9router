export default {
  id: "meganova-ai",
  priority: 50,
  hasFree: true,
  alias: "meganova-ai",
  display: {
    name: "MegaNova AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "MA",
    website: "https://meganova.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.meganova.ai/v1/chat/completions",
    validateUrl: "https://api.meganova.ai/v1/models",
  },
  models: [
  ],
}
