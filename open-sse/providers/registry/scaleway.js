export default {
  id: "scaleway",
  priority: 50,
  hasFree: true,
  alias: "scaleway",
  display: {
    name: "Scaleway AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "SA",
    website: "https://www.scaleway.com/en/docs/ai-data/generative-apis/",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.scaleway.ai/v1/chat/completions",
    validateUrl: "https://api.scaleway.ai/v1/models",
  },
  models: [
    { id: "qwen3-235b-a22b-instruct-2507", name: "Qwen3 235B A22B (1M free tok \ud83c\udd93)" },
    { id: "llama-3.1-70b-instruct", name: "Llama 3.1 70B (\ud83c\udd93 EU)" },
    { id: "llama-3.1-8b-instruct", name: "Llama 3.1 8B (\ud83c\udd93 EU)" },
    { id: "mistral-small-3.2-24b-instruct-2506", name: "Mistral Small 3.2 (\ud83c\udd93 EU)" },
    { id: "deepseek-v3-0324", name: "DeepSeek V3 (\ud83c\udd93 EU)" },
    { id: "gpt-oss-120b", name: "GPT-OSS 120B (\ud83c\udd93 EU)" },
  ],
}
