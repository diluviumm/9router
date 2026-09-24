export default {
  id: "sensenova",
  priority: 50,
  hasFree: true,
  alias: "sensenova",
  display: {
    name: "SenseNova",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "SE",
    website: "https://platform.sensenova.cn",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://token.sensenova.cn/v1/chat/completions",
    validateUrl: "https://token.sensenova.cn/v1/models",
  },
  models: [
    { id: "sensenova-6.7-flash-lite", name: "SenseNova 6.7 Flash-Lite" },
    { id: "deepseek-v4-flash", name: "DeepSeek V4 Flash" },
    { id: "glm-5.2", name: "GLM 5.2" },
  ],
}
