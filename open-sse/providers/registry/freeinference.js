export default {
  id: "freeinference",
  priority: 50,
  hasFree: true,
  alias: "freeinference",
  display: {
    name: "FreeInference",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "FR",
    website: "https://freeinference.org",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://freeinference.org/v1/chat/completions",
    validateUrl: "https://freeinference.org/v1/models",
  },
  models: [
  ],
}
