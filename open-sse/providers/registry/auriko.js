export default {
  id: "auriko",
  priority: 50,
  hasFree: true,
  alias: "auriko",
  display: {
    name: "Auriko",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AU",
    website: "https://www.auriko.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.auriko.ai/v1/chat/completions",
    validateUrl: "https://api.auriko.ai/v1/models",
  },
  models: [
  ],
}
