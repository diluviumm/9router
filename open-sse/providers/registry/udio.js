export default {
  id: "udio",
  priority: 50,
  alias: "udio",
  display: {
    name: "Udio",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "UD",
    website: "https://udio.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://www.udio.com/api/generate-proxy",
  },
  models: [
    { id: "udio-default", name: "Udio Default" },
  ],
}
