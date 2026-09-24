export default {
  id: "llm-kiwi",
  priority: 50,
  hasFree: true,
  alias: "llm-kiwi",
  display: {
    name: "LLM.Kiwi",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LK",
    website: "https://llm.kiwi",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.llm.kiwi/v1/chat/completions",
    validateUrl: "https://api.llm.kiwi/v1/models",
  },
  models: [
    { id: "auto", name: "Auto" },
    { id: "hrLLM", name: "hrLLM" },
  ],
}
