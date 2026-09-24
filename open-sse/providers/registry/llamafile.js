export default {
  id: "llamafile",
  priority: 50,
  alias: "llamafile",
  display: {
    name: "Llamafile",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LL",
    website: "https://github.com/Mozilla-Ocho/llamafile",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://127.0.0.1:8080/v1",
    validateUrl: "http://127.0.0.1:8080/v1/models",
  },
  models: [
  ],
}
