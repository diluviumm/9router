export default {
  id: "chat-oripe",
  priority: 50,
  hasFree: true,
  alias: "chat-oripe",
  display: {
    name: "Chat Oripe",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "CO",
    website: "https://api.oriper.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.oriper.com/v1/chat/completions",
    validateUrl: "https://api.oriper.com/v1/models",
  },
  models: [
  ],
}
