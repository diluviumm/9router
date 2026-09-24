export default {
  id: "adapta-web",
  priority: 50,
  alias: "adapta-web",
  display: {
    name: "Adapta.org (Adapta One Web)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AO",
    website: "https://agent.adapta.one",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://agent.adapta.one/api/chat/stream/v1",
    validateUrl: "https://agent.adapta.one/api/chat/stream/v1/models",
  },
  models: [
    { id: "adapta-one", name: "Adapta ONE (Auto)" },
    { id: "adapta-gpt", name: "GPT-5 (via Adapta)" },
    { id: "adapta-claude", name: "Claude Sonnet 4.6 (via Adapta)" },
    { id: "adapta-gemini", name: "Gemini 2.5 Pro (via Adapta)" },
    { id: "adapta-grok", name: "Grok 4 (via Adapta)" },
    { id: "adapta-deepseek", name: "DeepSeek R2 (via Adapta)" },
    { id: "adapta-llama", name: "Llama 4 (via Adapta)" },
  ],
}
