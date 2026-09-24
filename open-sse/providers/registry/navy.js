export default {
  id: "navy",
  priority: 50,
  hasFree: true,
  alias: "navy",
  display: {
    name: "NavyAI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "NA",
    website: "https://api.navy",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.navy/v1/chat/completions",
    validateUrl: "https://api.navy/v1/models",
  },
  models: [
    { id: "llama-3.3-70b-instruct", name: "Llama 3.3 70B Instruct" },
    { id: "gemma-4-31b-it", name: "Gemma 4 31B IT" },
    { id: "deepseek-v4-flash", name: "DeepSeek V4 Flash" },
    { id: "deepseek-chat", name: "DeepSeek Chat" },
    { id: "mistral-small-latest", name: "Mistral Small" },
    { id: "llama-4-scout", name: "Llama 4 Scout" },
  ],
}
