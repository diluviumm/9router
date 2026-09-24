export default {
  id: "maritalk",
  priority: 50,
  alias: "maritalk",
  display: {
    name: "Maritalk",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "MA",
    website: "https://www.maritaca.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://chat.maritaca.ai/api",
  },
  models: [
    { id: "sabia-4", name: "sabia-4" },
    { id: "sabia-4-thinking", name: "sabia-4-thinking" },
    { id: "sabiazinho-4", name: "sabiazinho-4" },
  ],
}
