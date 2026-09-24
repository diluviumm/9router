export default {
  id: "helyxai",
  priority: 50,
  hasFree: true,
  alias: "helyxai",
  display: {
    name: "Helyx AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "HA",
    website: "https://helyxai.space",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://helyxai.space/v1/chat/completions",
    validateUrl: "https://helyxai.space/v1/models",
  },
  models: [
  ],
}
