export default {
  id: "fastrouter",
  priority: 50,
  hasFree: true,
  alias: "fastrouter",
  display: {
    name: "FastRouter",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "FA",
    website: "https://fastrouter.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.fastrouter.ai/api/v1/chat/completions",
    validateUrl: "https://api.fastrouter.ai/api/v1/models",
  },
  models: [
  ],
}
