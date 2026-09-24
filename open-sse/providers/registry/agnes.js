export default {
  id: "agnes",
  priority: 50,
  hasFree: true,
  alias: "agnes",
  display: {
    name: "Agnes AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AA",
    website: "https://agnes-ai.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://apihub.agnes-ai.com/v1/chat/completions",
    validateUrl: "https://apihub.agnes-ai.com/v1/models",
  },
  models: [
    { id: "agnes-2.0-flash", name: "Agnes 2.0 Flash" },
    { id: "agnes-2.5-flash", name: "Agnes 2.5 Flash" },
    { id: "agnes-3.0-flash", name: "Agnes 3.0 Flash" },
  ],
}
