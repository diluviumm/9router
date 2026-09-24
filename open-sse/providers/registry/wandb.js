export default {
  id: "wandb",
  priority: 50,
  alias: "wandb",
  display: {
    name: "Weights & Biases Inference",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "WB",
    website: "https://wandb.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.inference.wandb.ai/v1/chat/completions",
    validateUrl: "https://api.inference.wandb.ai/v1/models",
  },
  models: [
    { id: "openai/gpt-oss-120b", name: "openai/gpt-oss-120b" },
    { id: "Qwen/Qwen3-Coder-480B-A35B-Instruct", name: "Qwen/Qwen3-Coder-480B-A35B-Instruct" },
    { id: "deepseek-ai/DeepSeek-V3.1", name: "deepseek-ai/DeepSeek-V3.1" },
  ],
}
