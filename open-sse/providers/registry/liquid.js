export default {
  id: "liquid",
  priority: 50,
  hasFree: true,
  alias: "liquid",
  display: {
    name: "Liquid AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LA",
    website: "https://liquid.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://inference.liquid.ai/v1/chat/completions",
    validateUrl: "https://inference.liquid.ai/v1/models",
  },
  models: [
    { id: "liquid-lfm-40b", name: "Liquid LFM 40B" },
  ],
}
