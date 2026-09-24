export default {
  id: "agentrouter",
  priority: 50,
  hasFree: true,
  alias: "agentrouter",
  display: {
    name: "AgentRouter",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AG",
    website: "https://agentrouter.org",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://agentrouter.org/v1/messages",
    validateUrl: "https://agentrouter.org/v1/models",
  },
  models: [
    { id: "claude-opus-4-8", name: "Claude Opus 4.8" },
    { id: "claude-opus-5", name: "Claude Opus 5" },
    { id: "gpt-5.6-sol", name: "GPT-5.6 Sol" },
  ],
}
