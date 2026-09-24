export default {
  id: "logfare",
  priority: 50,
  hasFree: true,
  alias: "logfare",
  display: {
    name: "Logfare",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LO",
    website: "https://logfare.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://logfare.ai/v1/chat/completions",
    validateUrl: "https://logfare.ai/v1/models",
  },
  models: [
  ],
}
