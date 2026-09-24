export default {
  id: "openadapter",
  priority: 50,
  hasFree: true,
  alias: "openadapter",
  display: {
    name: "OpenAdapter",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "OP",
    website: "https://openadapter.dev",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.openadapter.in/v1/chat/completions",
    validateUrl: "https://api.openadapter.in/v1/models",
  },
  models: [
    { id: "glm-4.7", name: "GLM 4.7 (OpenAdapter)" },
  ],
}
