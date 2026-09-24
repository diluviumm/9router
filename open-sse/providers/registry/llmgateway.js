export default {
  id: "llmgateway",
  priority: 50,
  hasFree: true,
  alias: "llmgateway",
  display: {
    name: "LLM Gateway",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LG",
    website: "https://llmgateway.io",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.llmgateway.io/v1/chat/completions",
    validateUrl: "https://api.llmgateway.io/v1/models",
  },
  models: [
  ],
}
