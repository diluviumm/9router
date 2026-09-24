export default {
  id: "lm-studio",
  priority: 50,
  alias: "lm-studio",
  display: {
    name: "LM Studio",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LS",
    website: "https://lmstudio.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://localhost:1234/v1",
    validateUrl: "http://localhost:1234/v1/models",
  },
  models: [
  ],
}
