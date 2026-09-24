export default {
  id: "g4f-gemini",
  priority: 50,
  alias: "g4f-gemini",
  display: {
    name: "g4f.space \u2014 Gemini",
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
    baseUrl: "https://g4f.space/api/gemini/v1/chat/completions",
    validateUrl: "https://g4f.space/api/gemini/v1/models",
  },
  models: [
    { id: "models/gemini-2.5-flash", name: "Gemini 2.5 Flash (g4f)" },
    { id: "models/gemini-2.5-pro", name: "Gemini 2.5 Pro (g4f)" },
  ],
}
