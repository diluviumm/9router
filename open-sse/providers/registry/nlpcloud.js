export default {
  id: "nlpcloud",
  priority: 50,
  hasFree: true,
  alias: "nlpcloud",
  display: {
    name: "NLP Cloud",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "NC",
    website: "https://docs.nlpcloud.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.nlpcloud.io/v1/gpu",
  },
  models: [
    { id: "chatdolphin", name: "ChatDolphin" },
    { id: "dolphin", name: "Dolphin" },
    { id: "finetuned-llama-3-70b", name: "Fine-tuned LLaMA 3.3 70B" },
    { id: "llama-3-1-405b", name: "LLaMA 3.1 405B" },
    { id: "llama-3-8b-instruct", name: "Llama 3 8B" },
  ],
}
