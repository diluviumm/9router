export default {
  id: "mlx-gemma",
  priority: 50,
  alias: "mlx-gemma",
  display: {
    name: "MLX Gemma 26B",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "MG",
    website: "https://github.com/ml-explore/mlx",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://localhost:11435/v1",
    validateUrl: "http://localhost:11435/v1/models",
  },
  models: [
    { id: "mlx-community/gemma-4-26B-A4B-it-qat-q4_0-mlx-aligned", name: "Gemma 4 26B A4B IT-QAT (MLX)" },
  ],
}
