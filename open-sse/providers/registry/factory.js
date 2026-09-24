export default {
  id: "factory",
  priority: 50,
  alias: "factory",
  display: {
    name: "Factory",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "FA",
    website: "https://factory.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.factory.ai/v1/chat/completions",
    validateUrl: "https://api.factory.ai/v1/models",
  },
  models: [
    { id: "auto", name: "Factory Auto (best model)" },
  ],
}
