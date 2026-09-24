export default {
  id: "zai-web",
  priority: 50,
  hasFree: true,
  alias: "zai-web",
  display: {
    name: "Z.ai Web",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "ZA",
    website: "https://chat.z.ai",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://chat.z.ai",
  },
  models: [
    { id: "glm-5.3-flash", name: "GLM-5.3-Flash" },
    { id: "glm-5.3", name: "GLM-5.3" },
    { id: "glm-5.2", name: "GLM-5.2" },
  ],
}
