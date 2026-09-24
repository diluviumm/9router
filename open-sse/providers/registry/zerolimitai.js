export default {
  id: "zerolimitai",
  priority: 50,
  hasFree: true,
  alias: "zerolimitai",
  display: {
    name: "ZeroLimitAI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "ZE",
    website: "https://www.zerolimitai.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://www.zerolimitai.com/api/v1/chat/completions",
    validateUrl: "https://www.zerolimitai.com/api/v1/models",
  },
  models: [
  ],
}
