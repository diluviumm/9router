export default {
  id: "cloudcode-one",
  priority: 50,
  hasFree: true,
  alias: "cloudcode-one",
  display: {
    name: "CloudCode.ONE",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "CO",
    website: "https://cloudcode.one",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.cloudcode.one/v1/chat/completions",
    validateUrl: "https://api.cloudcode.one/v1/models",
  },
  models: [
    { id: "glm-4.7-flash", name: "GLM 4.7 Flash" },
    { id: "glm-4.6v-flash", name: "GLM 4.6V Flash" },
  ],
}
