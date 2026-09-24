export default {
  id: "sealion",
  priority: 50,
  hasFree: true,
  alias: "sealion",
  display: {
    name: "SEA-LION",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "SL",
    website: "https://sea-lion.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.sea-lion.ai/v1/chat/completions",
    validateUrl: "https://api.sea-lion.ai/v1/models",
  },
  models: [
    { id: "aisingapore/Llama-SEA-LION-v3.5-70B-R", name: "Llama SEA-LION v3.5 70B R" },
    { id: "aisingapore/Llama-SEA-LION-v3-70B-IT", name: "Llama SEA-LION v3 70B IT" },
    { id: "aisingapore/Gemma-SEA-LION-v4-27B-IT", name: "Gemma SEA-LION v4 27B IT" },
    { id: "aisingapore/Qwen-SEA-LION-v4.5-27B-IT", name: "Qwen SEA-LION v4.5 27B IT" },
    { id: "aisingapore/Qwen-SEA-LION-v4-32B-IT", name: "Qwen SEA-LION v4 32B IT" },
  ],
}
