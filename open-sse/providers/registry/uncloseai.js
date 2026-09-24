export default {
  id: "uncloseai",
  priority: 50,
  hasFree: true,
  alias: "uncloseai",
  display: {
    name: "UncloseAI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "UN",
    website: "https://uncloseai.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://hermes.ai.unturf.com/v1/chat/completions",
    validateUrl: "https://hermes.ai.unturf.com/v1/models",
  },
  models: [
    { id: "Lorbus/Qwen3.6-27B-int4-AutoRound", name: "Qwen3.6 27B int4 AutoRound (\ud83c\udd93 Free)" },
  ],
}
