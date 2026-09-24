export default {
  id: "galadriel",
  priority: 50,
  alias: "galadriel",
  display: {
    name: "Galadriel",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "GA",
    website: "https://galadriel.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.galadriel.ai/v1/chat/completions",
    validateUrl: "https://api.galadriel.ai/v1/models",
  },
  models: [
    { id: "galadriel-latest", name: "galadriel-latest" },
  ],
}
