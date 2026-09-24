export default {
  id: "arcee-ai",
  priority: 50,
  hasFree: true,
  alias: "arcee-ai",
  display: {
    name: "Arcee AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AA",
    website: "https://arcee.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.arcee.ai/api/v1/chat/completions",
    validateUrl: "https://api.arcee.ai/api/v1/models",
  },
  models: [
  ],
}
