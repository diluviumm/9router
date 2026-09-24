export default {
  id: "kimi-coding-apikey",
  priority: 50,
  alias: "kimi-coding-apikey",
  display: {
    name: "Kimi Code API Key",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "KC",
    website: "https://www.kimi.ai/code?aff=omniroute",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.kimi.com/coding/v1/messages?beta=true",
  },
  models: [
    { id: "k3", name: "Kimi K3" },
    { id: "kimi-for-coding", name: "Kimi K2.7 Code" },
    { id: "kimi-for-coding-highspeed", name: "Kimi K2.7 Code (High Speed)" },
  ],
}
