export default {
  id: "qwen-cloud-token-plan",
  priority: 50,
  alias: "qwen-cloud-token-plan",
  display: {
    name: "Qwen Cloud Token Plan",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "QC",
    website: "https://www.qwencloud.com/pricing/token-plan",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://token-plan.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1/chat/completions",
    validateUrl: "https://token-plan.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1/models",
  },
  models: [
    { id: "qwen3.8-max", name: "Qwen3.8 Max" },
    { id: "qwen3.7-max", name: "Qwen3.7 Max" },
    { id: "qwen3.7-plus", name: "Qwen3.7 Plus" },
    { id: "qwen3.6-flash", name: "Qwen3.6 Flash" },
    { id: "glm-5.2", name: "GLM 5.2" },
    { id: "deepseek-v4-pro", name: "DeepSeek V4 Pro" },
    { id: "deepseek-v4-flash-0731", name: "DeepSeek V4 Flash" },
  ],
}
