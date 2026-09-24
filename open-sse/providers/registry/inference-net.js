export default {
  id: "inference-net",
  priority: 50,
  hasFree: true,
  alias: "inference-net",
  display: {
    name: "Inference.net",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "IN",
    website: "https://inference.net",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.inference.net/v1/chat/completions",
    validateUrl: "https://api.inference.net/v1/models",
  },
  models: [
    { id: "meta-llama/Llama-3.3-70B-Instruct", name: "meta-llama/Llama-3.3-70B-Instruct" },
    { id: "deepseek-ai/DeepSeek-R1", name: "deepseek-ai/DeepSeek-R1" },
    { id: "Qwen/Qwen2.5-72B-Instruct", name: "Qwen/Qwen2.5-72B-Instruct" },
  ],
}
