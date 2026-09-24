export default {
  id: "wafer",
  priority: 50,
  alias: "wafer",
  display: {
    name: "Wafer AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "WA",
    website: "https://wafer.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://pass.wafer.ai/v1/messages",
    validateUrl: "https://pass.wafer.ai/v1/models",
  },
  models: [
    { id: "DeepSeek-V4-Pro", name: "DeepSeek V4 Pro" },
    { id: "MiniMax-M2.7", name: "MiniMax M2.7" },
    { id: "Qwen3.5-397B-A17B", name: "Qwen3.5 397B A17B" },
    { id: "GLM-5.1", name: "GLM 5.1" },
  ],
}
