export default {
  id: "upstage",
  priority: 50,
  alias: "upstage",
  display: {
    name: "Upstage",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "UP",
    website: "https://www.upstage.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.upstage.ai/v1/chat/completions",
    validateUrl: "https://api.upstage.ai/v1/models",
  },
  models: [
    { id: "solar-pro3", name: "solar-pro3" },
    { id: "solar-mini", name: "solar-mini" },
  ],
}
