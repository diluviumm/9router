export default {
  id: "typhoon",
  priority: 50,
  hasFree: true,
  alias: "typhoon",
  display: {
    name: "Typhoon",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "TY",
    website: "https://docs.opentyphoon.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.opentyphoon.ai/v1/chat/completions",
    validateUrl: "https://api.opentyphoon.ai/v1/models",
  },
  models: [
    { id: "typhoon-v2.5-30b-a3b-instruct", name: "Typhoon v2.5 30B A3B Instruct" },
  ],
}
