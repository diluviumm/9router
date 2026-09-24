export default {
  id: "oobabooga",
  priority: 50,
  alias: "oobabooga",
  display: {
    name: "oobabooga",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "OO",
    website: "https://github.com/oobabooga/text-generation-webui",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://localhost:5000/v1",
    validateUrl: "http://localhost:5000/v1/models",
  },
  models: [
  ],
}
