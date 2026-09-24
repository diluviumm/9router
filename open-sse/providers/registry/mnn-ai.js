export default {
  id: "mnn-ai",
  priority: 50,
  hasFree: true,
  alias: "mnn-ai",
  display: {
    name: "MNN AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "MA",
    website: "https://mnnai.ru",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.mnnai.ru/v1/chat/completions",
    validateUrl: "https://api.mnnai.ru/v1/models",
  },
  models: [
  ],
}
