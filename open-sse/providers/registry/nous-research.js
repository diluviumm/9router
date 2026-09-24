export default {
  id: "nous-research",
  priority: 50,
  hasFree: true,
  alias: "nous-research",
  display: {
    name: "Nous Research",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "NR",
    website: "https://portal.nousresearch.com/help",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://inference-api.nousresearch.com/v1/chat/completions",
    validateUrl: "https://inference-api.nousresearch.com/v1/models",
  },
  models: [
    { id: "Hermes-4-405B", name: "Hermes 4 405B (Nous Research)" },
    { id: "Hermes-4-70B", name: "Hermes 4 70B (Nous Research)" },
  ],
}
