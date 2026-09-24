export default {
  id: "x5lab",
  priority: 50,
  alias: "x5lab",
  display: {
    name: "X5Lab",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "X5",
    website: "https://x5lab.dev",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.x5lab.dev/v1/chat/completions",
    validateUrl: "https://api.x5lab.dev/v1/models",
  },
  models: [
  ],
}
