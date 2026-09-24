export default {
  id: "yi",
  priority: 50,
  alias: "yi",
  display: {
    name: "Yi (01.AI)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "Y0",
    website: "https://01.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.lingyiwanwu.com/v1/chat/completions",
    validateUrl: "https://api.lingyiwanwu.com/v1/models",
  },
  models: [
    { id: "yi-large", name: "Yi Large" },
  ],
}
