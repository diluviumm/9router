export default {
  id: "dahl",
  priority: 50,
  hasFree: true,
  alias: "dahl",
  display: {
    name: "Dahl",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "DA",
    website: "https://inference.dahl.global",
    notice: {
      apiKeyUrl: "https://inference.dahl.global/tokens",
    },
  },
  category: "apikey",
  transport: {
    baseUrl: "https://inference.dahl.global/v1/chat/completions",
    validateUrl: "https://inference.dahl.global/v1/models",
  },
  models: [
    { id: "MiniMaxAI/MiniMax-M2.7", name: "MiniMax M2.7" },
    { id: "moonshotai/Kimi-K2.6", name: "Kimi K2.6" },
  ],
}
