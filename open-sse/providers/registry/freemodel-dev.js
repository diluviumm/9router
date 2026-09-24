export default {
  id: "freemodel-dev",
  priority: 50,
  hasFree: true,
  alias: "freemodel-dev",
  display: {
    name: "FreeModel.dev",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "FD",
    website: "https://freemodel.dev",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.freemodel.dev/v1/chat/completions",
    validateUrl: "https://api.freemodel.dev/v1/models",
  },
  models: [
    { id: "gpt-5.5", name: "GPT-5.5" },
    { id: "gpt-5.4", name: "GPT-5.4" },
    { id: "gpt-5.4-mini", name: "GPT-5.4 Mini" },
    { id: "gpt-5.3-codex", name: "GPT-5.3 Codex" },
  ],
}
