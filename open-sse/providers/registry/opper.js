export default {
  id: "opper",
  priority: 50,
  alias: "opper",
  display: {
    name: "Opper",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "OP",
    website: "https://opper.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.opper.ai/v3/compat/chat/completions",
    validateUrl: "https://api.opper.ai/v3/compat/models",
  },
  models: [
  ],
}
