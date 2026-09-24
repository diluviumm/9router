export default {
  id: "sarvam",
  priority: 50,
  hasFree: true,
  alias: "sarvam",
  display: {
    name: "Sarvam AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "SA",
    website: "https://docs.sarvam.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.sarvam.ai/v1/chat/completions",
    validateUrl: "https://api.sarvam.ai/v1/models",
  },
  models: [
    { id: "sarvam-105b", name: "Sarvam 105B" },
    { id: "sarvam-30b", name: "Sarvam 30B" },
  ],
}
