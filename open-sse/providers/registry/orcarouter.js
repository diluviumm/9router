export default {
  id: "orcarouter",
  priority: 50,
  alias: "orcarouter",
  display: {
    name: "OrcaRouter",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "OR",
    website: "https://www.orcarouter.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.orcarouter.ai/v1/chat/completions",
    validateUrl: "https://api.orcarouter.ai/v1/models",
  },
  models: [
    { id: "orcarouter/auto", name: "Auto (smart routing)" },
    { id: "openai/gpt-5.5", name: "GPT-5.5" },
    { id: "google/gemini-3.6-flash", name: "Gemini 3.6 Flash" },
    { id: "anthropic/claude-opus-4.8", name: "Claude Opus 4.8" },
    { id: "grok/grok-4.3", name: "Grok 4.3" },
    { id: "deepseek/deepseek-v4-pro", name: "DeepSeek V4 Pro" },
    { id: "minimax/minimax-m2.7", name: "MiniMax M2.7" },
    { id: "qwen/qwen3.7-max", name: "Qwen3.7 Max" },
  ],
}
