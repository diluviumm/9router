export default {
  id: "chatanywhere",
  priority: 50,
  hasFree: true,
  alias: "chatanywhere",
  display: {
    name: "ChatAnywhere",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "CH",
    website: "https://chatanywhere.tech",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.chatanywhere.org/v1/chat/completions",
    validateUrl: "https://api.chatanywhere.org/v1/models",
  },
  models: [
  ],
}
