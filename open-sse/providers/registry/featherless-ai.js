export default {
  id: "featherless-ai",
  priority: 50,
  alias: "featherless-ai",
  display: {
    name: "Featherless AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "FA",
    website: "https://featherless.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.featherless.ai/v1/chat/completions",
    validateUrl: "https://api.featherless.ai/v1/models",
  },
  models: [
    { id: "featherless-ai/Qwerky-72B", name: "featherless-ai/Qwerky-72B" },
    { id: "featherless-ai/Qwerky-QwQ-32B", name: "featherless-ai/Qwerky-QwQ-32B" },
  ],
}
