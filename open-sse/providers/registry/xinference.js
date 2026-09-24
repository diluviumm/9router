export default {
  id: "xinference",
  priority: 50,
  alias: "xinference",
  display: {
    name: "XInference",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "XI",
    website: "https://inference.readthedocs.io",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://localhost:9997/v1",
    validateUrl: "http://localhost:9997/v1/models",
  },
  models: [
  ],
}
