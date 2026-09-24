export default {
  id: "triton",
  priority: 50,
  alias: "triton",
  display: {
    name: "NVIDIA Triton",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "NT",
    website: "https://developer.nvidia.com/triton-inference-server",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://localhost:8000/v1",
    validateUrl: "http://localhost:8000/v1/models",
  },
  models: [
  ],
}
