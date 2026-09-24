export default {
  id: "modal",
  priority: 50,
  hasFree: true,
  alias: "modal",
  display: {
    name: "Modal",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "MO",
    website: "https://modal.com/docs",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.modal.ai/v1/chat/completions",
    validateUrl: "https://api.modal.ai/v1/models",
  },
  models: [
    { id: "google/gemini-2.0-flash", name: "Gemini 2.0 Flash" },
  ],
}
