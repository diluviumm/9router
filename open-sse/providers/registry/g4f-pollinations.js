export default {
  id: "g4f-pollinations",
  priority: 50,
  alias: "g4f-pollinations",
  display: {
    name: "g4f.space \u2014 Pollinations",
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
    baseUrl: "https://g4f.space/api/pollinations/v1/chat/completions",
    validateUrl: "https://g4f.space/api/pollinations/v1/models",
  },
  models: [
    { id: "openai", name: "OpenAI (g4f/Pollinations)" },
    { id: "openai-fast", name: "OpenAI Fast (g4f/Pollinations)" },
  ],
}
