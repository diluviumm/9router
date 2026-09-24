export default {
  id: "naga-ai",
  priority: 50,
  hasFree: true,
  alias: "naga-ai",
  display: {
    name: "Naga AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "NA",
    website: "https://naga.ac",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.naga.ac/v1/chat/completions",
    validateUrl: "https://api.naga.ac/v1/models",
  },
  models: [
  ],
}
