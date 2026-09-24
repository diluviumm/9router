export default {
  id: "openference-api",
  priority: 50,
  hasFree: true,
  alias: "openference-api",
  display: {
    name: "Openference API",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "OA",
    website: "https://openference.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.openference.com/v1/chat/completions",
    validateUrl: "https://api.openference.com/v1/models",
  },
  models: [
    { id: "GLM-5.2", name: "GLM 5.2" },
    { id: "Qwen3.8 27b", name: "Qwen3.8 27B" },
    { id: "Llama 3.2 3B", name: "Llama 3.2 3B" },
  ],
}
