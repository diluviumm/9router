export default {
  id: "codestral",
  priority: 50,
  alias: "codestral",
  display: {
    name: "Codestral",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "CO",
    website: "https://mistral.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://codestral.mistral.ai/v1/chat/completions",
    validateUrl: "https://codestral.mistral.ai/v1/models",
  },
  models: [
    { id: "codestral-2508", name: "codestral-2508" },
    { id: "codestral-latest", name: "codestral-latest" },
  ],
}
