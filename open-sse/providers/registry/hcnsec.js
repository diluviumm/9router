export default {
  id: "hcnsec",
  priority: 50,
  hasFree: true,
  alias: "hcnsec",
  display: {
    name: "Huancheng Public API",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "HP",
    website: "https://api.hcnsec.cn",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.hcnsec.cn/v1/chat/completions",
    validateUrl: "https://api.hcnsec.cn/v1/models",
  },
  models: [
  ],
}
