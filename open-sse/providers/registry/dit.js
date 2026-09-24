export default {
  id: "dit",
  priority: 50,
  alias: "dit",
  display: {
    name: "DIT.ai",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "DA",
    website: "https://dit.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.dit.ai/v1/chat/completions",
    validateUrl: "https://api.dit.ai/v1/models",
  },
  models: [
    { id: "gpt-5.4", name: "GPT-5.4 (DIT.ai)" },
    { id: "claude-sonnet-4-6", name: "Claude Sonnet 4.6 (DIT.ai)" },
  ],
}
