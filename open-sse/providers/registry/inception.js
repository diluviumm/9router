export default {
  id: "inception",
  priority: 50,
  hasFree: true,
  alias: "inception",
  display: {
    name: "Inception",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "IN",
    website: "https://docs.inceptionlabs.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.inceptionlabs.ai/v1/chat/completions",
    validateUrl: "https://api.inceptionlabs.ai/v1/models",
  },
  models: [
    { id: "mercury-2", name: "Mercury 2" },
  ],
}
