export default {
  id: "volcengine-coding-plan",
  priority: 50,
  alias: "volcengine-coding-plan",
  display: {
    name: "Volcengine Ark Coding Plan",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "VA",
    website: "https://console.volcengine.com/ark/region:cn-beijing/subscription/coding-plan",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://ark.cn-beijing.volces.com/api/coding/v3/chat/completions",
    validateUrl: "https://ark.cn-beijing.volces.com/api/coding/v3/models",
  },
  models: [
    { id: "doubao-seed-2-1-turbo", name: "Doubao Seed 2.1 Turbo (Coding Plan)" },
    { id: "doubao-seed-2.0-lite", name: "Doubao Seed 2.0 Lite (Coding Plan)" },
    { id: "deepseek-v4-flash", name: "DeepSeek V4 Flash (Coding Plan)" },
    { id: "glm-5.2", name: "GLM 5.2 (Coding Plan)" },
    { id: "kimi-k2.7-code", name: "Kimi K2.7 Code (Coding Plan)" },
    { id: "minimax-m3", name: "MiniMax M3 (Coding Plan)" },
    { id: "deepseek-v4-pro", name: "DeepSeek V4 Pro (Coding Plan)" },
    { id: "minimax-m2.7", name: "MiniMax M2.7 (Coding Plan)" },
    { id: "kimi-k2.6", name: "Kimi K2.6 (Coding Plan)" },
  ],
}
