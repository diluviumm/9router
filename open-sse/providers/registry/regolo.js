export default {
  id: "regolo",
  priority: 50,
  alias: "regolo",
  display: {
    name: "Regolo AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "RA",
    website: "https://regolo.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.regolo.ai",
  },
  models: [
    { id: "regolo-chat", name: "Regolo Chat" },
    { id: "regolo-fast", name: "Regolo Fast" },
  ],
}
