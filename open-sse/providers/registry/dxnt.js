export default {
  id: "dxnt",
  priority: 50,
  hasFree: true,
  alias: "dxnt",
  display: {
    name: "DXNT / DX Token",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "DD",
    website: "https://www.dxnt.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://www.dxnt.com/v1/chat/completions",
    validateUrl: "https://www.dxnt.com/v1/models",
  },
  models: [
  ],
}
