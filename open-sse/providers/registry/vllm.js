export default {
  id: "vllm",
  priority: 50,
  alias: "vllm",
  display: {
    name: "vLLM",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "VL",
    website: "https://github.com/vllm-project/vllm",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://localhost:8000/v1",
    validateUrl: "http://localhost:8000/v1/models",
  },
  models: [
  ],
}
