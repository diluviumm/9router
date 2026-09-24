export default {
  id: "mixlayer",
  priority: 50,
  hasFree: true,
  alias: "mixlayer",
  display: {
    name: "Mixlayer",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "MI",
    website: "https://www.mixlayer.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://models.mixlayer.ai/v1/chat/completions",
    validateUrl: "https://models.mixlayer.ai/v1/models",
  },
  models: [
    { id: "qwen/qwen3.5-4b-free", name: "Qwen 3.5 4B (free)" },
  ],
}
