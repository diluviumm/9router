export default {
  id: "speka",
  priority: 50,
  hasFree: true,
  alias: "speka",
  display: {
    name: "Speka AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "SA",
    website: "https://speka.me",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://speka.me/v1/chat/completions",
    validateUrl: "https://speka.me/v1/models",
  },
  models: [
  ],
}
