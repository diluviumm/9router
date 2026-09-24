export default {
  id: "deepai",
  priority: 50,
  alias: "deepai",
  display: {
    name: "DeepAI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "DE",
    website: "https://deepai.org",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.deepai.org",
  },
  models: [
    { id: "text2img", name: "Text to Image" },
  ],
}
