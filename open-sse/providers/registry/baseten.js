export default {
  id: "baseten",
  priority: 50,
  hasFree: true,
  alias: "baseten",
  display: {
    name: "Baseten",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "BA",
    website: "https://baseten.co",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://inference.baseten.co/v1/chat/completions",
    validateUrl: "https://inference.baseten.co/v1/models",
  },
  models: [
    { id: "moonshotai/Kimi-K2.6", name: "moonshotai/Kimi-K2.6" },
    { id: "deepseek-ai/DeepSeek-V4-Pro", name: "deepseek-ai/DeepSeek-V4-Pro" },
    { id: "zai-org/GLM-5", name: "zai-org/GLM-5" },
    { id: "MiniMaxAI/MiniMax-M2.5", name: "MiniMaxAI/MiniMax-M2.5" },
    { id: "nvidia/Nemotron-120B-A12B", name: "nvidia/Nemotron-120B-A12B" },
    { id: "openai/gpt-oss-120b", name: "openai/gpt-oss-120b" },
  ],
}
