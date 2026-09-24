export default {
  id: "lyceum",
  priority: 50,
  hasFree: true,
  alias: "lyceum",
  display: {
    name: "Lyceum",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LY",
    website: "https://lyceum.technology",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.lyceum.technology/openai/v1/chat/completions",
    validateUrl: "https://api.lyceum.technology/openai/v1/models",
  },
  models: [
  ],
}
