export default {
  id: "dgrid",
  priority: 50,
  hasFree: true,
  alias: "dgrid",
  display: {
    name: "DGrid",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "DG",
    website: "https://dgrid.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.dgrid.ai/v1/chat/completions",
    validateUrl: "https://api.dgrid.ai/v1/models",
  },
  models: [
    { id: "dgridai/free", name: "DGrid Free Models Router" },
  ],
}
