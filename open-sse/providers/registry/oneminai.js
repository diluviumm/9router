export default {
  id: "oneminai",
  priority: 50,
  alias: "oneminai",
  display: {
    name: "1min.AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "1A",
    website: "https://1min.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.1min.ai/api/chat-with-ai",
  },
  models: [
    { id: "gpt-4o-mini", name: "GPT-4o Mini" },
  ],
}
