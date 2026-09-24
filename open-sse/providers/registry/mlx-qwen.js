export default {
  id: "mlx-qwen",
  priority: 50,
  alias: "mlx-qwen",
  display: {
    name: "MLX Qwen 3.8 27B",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "MQ",
    website: "https://github.com/ml-explore/mlx",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://localhost:11436/v1",
    validateUrl: "http://localhost:11436/v1/models",
  },
  models: [
    { id: "maglun/Qwen3.8-27B-MLX-Mixed-3.80bpw", name: "Qwen 3.8 27B MLX Mixed 3.80bpw" },
  ],
}
