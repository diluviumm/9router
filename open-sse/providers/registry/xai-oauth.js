export default {
  id: "xai-oauth",
  priority: 50,
  alias: "xai-oauth",
  display: {
    name: "xAI OAuth (Grok)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "XO",
    website: "https://x.ai",
  },
  category: "oauth",
  transport: {
    baseUrl: "https://api.x.ai/v1/chat/completions",
    validateUrl: "https://api.x.ai/v1/models",
  },
  models: [
    { id: "grok-4.5", name: "Grok 4.5" },
    { id: "grok-4.6", name: "Grok 4.6" },
    { id: "grok-4.3", name: "Grok 4.3" },
    { id: "grok-build-0.1", name: "Grok Build 0.1" },
    { id: "grok-4.20-multi-agent-0309", name: "Grok 4.20 Multi Agent" },
    { id: "grok-4.20-0309-reasoning", name: "Grok 4.20 Reasoning" },
    { id: "grok-4.20-0309-non-reasoning", name: "Grok 4.20" },
  ],
}
