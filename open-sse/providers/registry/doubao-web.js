export default {
  id: "doubao-web",
  priority: 50,
  alias: "doubao-web",
  display: {
    name: "Dola Web (ByteDance)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "DW",
    website: "https://www.dola.com",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://www.dola.com/chat/completion",
  },
  models: [
    { id: "dola-speed", name: "Dola Speed" },
    { id: "dola-pro", name: "Dola Pro" },
  ],
}
