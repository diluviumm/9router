export default {
  id: "zai",
  priority: 50,
  alias: "zai",
  display: {
    name: "Z.AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "ZA",
    website: "https://open.bigmodel.cn",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.z.ai/api/anthropic/v1/messages",
    validateUrl: "https://api.z.ai/api/anthropic/v1/models",
  },
  models: [
    { id: "glm-5.3", name: "GLM 5.3" },
    { id: "glm-5.3-flash", name: "GLM 5.3 Flash" },
    { id: "glm-5.2", name: "GLM 5.2" },
    { id: "glm-5.1", name: "GLM 5.1" },
    { id: "glm-5", name: "GLM 5" },
    { id: "glm-5-turbo", name: "GLM 5 Turbo" },
    { id: "glm-4.7-flash", name: "GLM 4.7 Flash" },
    { id: "glm-4.7", name: "GLM 4.7" },
  ],
}
