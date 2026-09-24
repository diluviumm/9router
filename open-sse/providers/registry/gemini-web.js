export default {
  id: "gemini-web",
  priority: 50,
  alias: "gemini-web",
  display: {
    name: "Gemini Web (Free)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "GW",
    website: "https://gemini.google.com",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://gemini.google.com/app",
  },
  models: [
    { id: "gemini-3.1-pro", name: "Gemini 3.1 Pro" },
    { id: "gemini-3.7-flash", name: "Gemini 3.7 Flash" },
    { id: "gemini-3.1-flash-lite", name: "Gemini 3.1 Flash-Lite" },
  ],
}
