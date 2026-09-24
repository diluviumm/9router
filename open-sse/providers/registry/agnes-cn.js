export default {
  id: "agnes-cn",
  priority: 50,
  hasFree: true,
  alias: "agnes-cn",
  display: {
    name: "Agnes AI (China)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AA",
    website: "https://api.agnes-ai.cn",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.agnes-ai.cn/v1/chat/completions",
    validateUrl: "https://api.agnes-ai.cn/v1/models",
  },
  models: [
    { id: "agnes-2.0-flash", name: "Agnes 2.0 Flash" },
    { id: "agnes-2.5-flash", name: "Agnes 2.5 Flash" },
    { id: "agnes-3.0-flash", name: "Agnes 3.0 Flash" },
  ],
}
