export default {
  id: "predibase",
  priority: 50,
  alias: "predibase",
  display: {
    name: "Predibase",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "PR",
    website: "https://predibase.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://serving.app.predibase.com/v1/chat/completions",
    validateUrl: "https://serving.app.predibase.com/v1/models",
  },
  models: [
    { id: "llama-3.3-70b", name: "llama-3.3-70b" },
  ],
}
