export default {
  id: "searxng-search",
  priority: 50,
  hasFree: true,
  alias: "searxng-search",
  display: {
    name: "SearXNG Search",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "SS",
    website: "https://docs.searxng.org",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://localhost:8888/search",
  },
  models: [
  ],
}
