export default {
  id: "writer",
  priority: 50,
  alias: "writer",
  display: {
    name: "Writer",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "WR",
    website: "https://dev.writer.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.writer.com/v1/chat/completions",
    validateUrl: "https://api.writer.com/v1/models",
  },
  models: [
    { id: "palmyra-x5", name: "Palmyra X5" },
    { id: "palmyra-x4", name: "Palmyra X4" },
  ],
}
