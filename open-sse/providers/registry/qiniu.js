export default {
  id: "qiniu",
  priority: 50,
  alias: "qiniu",
  display: {
    name: "Qiniu",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "QI",
    website: "https://www.qiniu.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.qnaigc.com/v1/chat/completions",
    validateUrl: "https://api.qnaigc.com/v1/models",
  },
  models: [
  ],
}
