export default {
  id: "aion",
  priority: 50,
  hasFree: true,
  alias: "aion",
  display: {
    name: "Aion Labs",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AL",
    website: "https://www.aionlabs.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.aionlabs.ai/v1/chat/completions",
    validateUrl: "https://api.aionlabs.ai/v1/models",
  },
  models: [
    { id: "aion-labs/aion-3.0", name: "Aion 3.0" },
    { id: "aion-labs/aion-3.0-mini", name: "Aion 3.0 Mini" },
    { id: "aion-labs/aion-2.5", name: "Aion 2.5" },
    { id: "aion-labs/aion-2.0", name: "Aion 2.0" },
    { id: "aion-labs/aion-rp-llama-3.1-8b", name: "Aion RP Llama 3.1 8B" },
  ],
}
