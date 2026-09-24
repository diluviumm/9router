export default {
  id: "leonardo",
  priority: 50,
  alias: "leonardo",
  display: {
    name: "Leonardo AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LA",
    website: "https://leonardo.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://cloud.leonardo.ai/api/rest/v1",
    validateUrl: "https://cloud.leonardo.ai/api/rest/v1/models",
  },
  models: [
    { id: "phoenix", name: "Phoenix" },
    { id: "sdxl", name: "SDXL" },
  ],
}
