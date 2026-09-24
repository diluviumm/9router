export default {
  id: "freetheai",
  priority: 50,
  hasFree: true,
  alias: "freetheai",
  display: {
    name: "FreeTheAi",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "FR",
    website: "https://freetheai.xyz",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.freetheai.xyz/v1/chat/completions",
    validateUrl: "https://api.freetheai.xyz/v1/models",
  },
  models: [
    { id: "gpt-4o-mini", name: "GPT-4o Mini" },
    { id: "llama-3.3-70b-instruct", name: "Llama 3.3 70B" },
    { id: "deepseek-chat", name: "DeepSeek Chat" },
  ],
}
