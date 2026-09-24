export default {
  id: "reka",
  priority: 50,
  hasFree: true,
  alias: "reka",
  display: {
    name: "Reka",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "RE",
    website: "https://docs.reka.ai/chat/overview",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.reka.ai/v1/chat/completions",
    validateUrl: "https://api.reka.ai/v1/models",
  },
  models: [
    { id: "reka-flash-3", name: "Reka Flash 3" },
    { id: "reka-flash", name: "Reka Flash" },
    { id: "reka-edge-2603", name: "Reka Edge 2603" },
  ],
}
