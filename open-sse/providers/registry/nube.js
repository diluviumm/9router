export default {
  id: "nube",
  priority: 50,
  alias: "nube",
  display: {
    name: "Nube.sh",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "NS",
    website: "https://nube.sh",
    notice: {
      apiKeyUrl: "https://nube.sh/dashboard/api-keys",
    },
  },
  category: "apikey",
  transport: {
    baseUrl: "https://ai.nube.sh/api/v1/chat/completions",
    validateUrl: "https://ai.nube.sh/api/v1/models",
  },
  models: [
  ],
}
