export default {
  id: "duckduckgo-web",
  priority: 50,
  hasFree: true,
  alias: "duckduckgo-web",
  display: {
    name: "DuckDuckGo AI Chat",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "DA",
    website: "https://duckduckgo.com/duckchat",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://duck.ai/duckchat/v1/chat",
  },
  models: [
    { id: "gpt-5.4-mini", name: "GPT-5.4 Mini" },
    { id: "gpt-5.6-luna", name: "GPT-5.6 Luna" },
    { id: "claude-haiku-4-5", name: "Claude Haiku 4.5" },
    { id: "mistral-small-2603", name: "Mistral Small 4" },
    { id: "tinfoil/gpt-oss-120b", name: "gpt-oss 120B" },
    { id: "tinfoil/gemma4-31b", name: "Gemma 4 31B" },
  ],
}
