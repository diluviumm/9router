export default {
  id: "tokenreply",
  priority: 50,
  hasFree: true,
  alias: "tokenreply",
  display: {
    name: "TokenReply",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "TO",
    website: "https://www.tokenreply.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.tokenreply.com/v1/chat/completions",
    validateUrl: "https://api.tokenreply.com/v1/models",
  },
  models: [
  ],
}
