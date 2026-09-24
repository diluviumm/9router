export default {
  id: "requesty",
  priority: 50,
  hasFree: true,
  alias: "requesty",
  display: {
    name: "Requesty",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "RE",
    website: "https://requesty.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://router.requesty.ai/v1/chat/completions",
    validateUrl: "https://router.requesty.ai/v1/models",
  },
  models: [
  ],
}
