export default {
  id: "electronhub",
  priority: 50,
  hasFree: true,
  alias: "electronhub",
  display: {
    name: "Electron Hub",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "EH",
    website: "https://www.electronhub.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.electronhub.ai/v1/chat/completions",
    validateUrl: "https://api.electronhub.ai/v1/models",
  },
  models: [
  ],
}
