export default {
  id: "g4f-groq",
  priority: 50,
  alias: "g4f-groq",
  display: {
    name: "g4f.space \u2014 Groq",
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
    baseUrl: "https://g4f.space/api/groq/v1/chat/completions",
    validateUrl: "https://g4f.space/api/groq/v1/models",
  },
  models: [
    { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B (g4f/Groq)" },
    { id: "llama-3.1-8b-instant", name: "Llama 3.1 8B Instant (g4f/Groq)" },
  ],
}
