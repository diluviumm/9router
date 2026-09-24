export default {
  id: "dify",
  priority: 50,
  hasFree: true,
  alias: "dify",
  display: {
    name: "Dify",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "DI",
    website: "https://dify.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.dify.ai",
  },
  models: [
    { id: "auto", name: "Auto" },
  ],
}
