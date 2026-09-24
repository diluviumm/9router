export default {
  id: "llama-cpp",
  priority: 50,
  alias: "llama-cpp",
  display: {
    name: "llama.cpp",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LC",
    website: "https://github.com/ggml-org/llama.cpp",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://127.0.0.1:8080/v1",
    validateUrl: "http://127.0.0.1:8080/v1/models",
  },
  models: [
  ],
}
