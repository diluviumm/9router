export default {
  id: "pioneer",
  priority: 50,
  hasFree: true,
  alias: "pioneer",
  display: {
    name: "Pioneer AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "PA",
    website: "https://pioneer.ai",
    notice: {
      apiKeyUrl: "https://agent.pioneer.ai/settings/api-keys",
    },
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.pioneer.ai/v1/chat/completions",
    validateUrl: "https://api.pioneer.ai/v1/models",
  },
  models: [
    { id: "Qwen/Qwen3-32B", name: "Qwen3 32B" },
    { id: "Qwen/Qwen3.6-27B", name: "Qwen3.6 27B" },
    { id: "Qwen/Qwen3.5-9B", name: "Qwen3.5 9B" },
    { id: "Qwen/Qwen3-8B", name: "Qwen3 8B" },
    { id: "Qwen/Qwen3-4B-Base", name: "Qwen3 4B Base" },
    { id: "Qwen/Qwen3-1.7B-Base", name: "Qwen3 1.7B Base" },
    { id: "meta-llama/Llama-3.1-8B-Instruct", name: "Llama 3.1 8B Instruct" },
    { id: "meta-llama/Llama-3.2-1B-Instruct", name: "Llama 3.2 1B Instruct" },
    { id: "google/gemma-3-4b-pt", name: "Gemma 3 4B (Pretrained)" },
    { id: "HuggingFaceTB/SmolLM3-3B-Base", name: "SmolLM3 3B Base" },
  ],
}
