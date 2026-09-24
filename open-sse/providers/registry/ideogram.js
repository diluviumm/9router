export default {
  id: "ideogram",
  priority: 50,
  alias: "ideogram",
  display: {
    name: "Ideogram",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "ID",
    website: "https://ideogram.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.ideogram.ai",
  },
  models: [
    { id: "V_3", name: "Ideogram V3" },
    { id: "V_2A", name: "Ideogram V2A" },
  ],
}
