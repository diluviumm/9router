export default {
  id: "g4f-ollama",
  priority: 50,
  alias: "g4f-ollama",
  display: {
    name: "g4f.space \u2014 Ollama",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "GS",
    website: "https://g4f.space",
    notice: {
      apiKeyUrl: "https://g4f.dev/members.html",
    },
  },
  category: "apikey",
  transport: {
    baseUrl: "https://g4f.space/api/ollama/v1/chat/completions",
    validateUrl: "https://g4f.space/api/ollama/v1/models",
  },
  models: [
    { id: "gemma3:4b", name: "Gemma 3 4B (g4f/Ollama)" },
  ],
}
