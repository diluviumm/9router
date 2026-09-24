export default {
  id: "sumopod",
  priority: 50,
  alias: "sumopod",
  display: {
    name: "SumoPod",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "SU",
    website: "https://ai.sumopod.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://ai.sumopod.com/v1/chat/completions",
    validateUrl: "https://ai.sumopod.com/v1/models",
  },
  models: [
  ],
}
