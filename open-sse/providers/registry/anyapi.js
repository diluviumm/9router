export default {
  id: "anyapi",
  priority: 50,
  hasFree: true,
  alias: "anyapi",
  display: {
    name: "AnyAPI AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AA",
    website: "https://anyapi.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.anyapi.ai/v1/chat/completions",
    validateUrl: "https://api.anyapi.ai/v1/models",
  },
  models: [
  ],
}
