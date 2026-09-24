export default {
  id: "haiper",
  priority: 50,
  alias: "haiper",
  display: {
    name: "Haiper",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "HA",
    website: "https://haiper.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.haiper.ai/v1",
    validateUrl: "https://api.haiper.ai/v1/models",
  },
  models: [
    { id: "gen2", name: "Gen 2 Video" },
    { id: "gen2-image", name: "Gen 2 Image" },
  ],
}
