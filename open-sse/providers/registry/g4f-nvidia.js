export default {
  id: "g4f-nvidia",
  priority: 50,
  alias: "g4f-nvidia",
  display: {
    name: "g4f.space \u2014 NVIDIA",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "GS",
    website: "https://g4f.space",
    notice: {
      apiKeyUrl: "https://g4f.dev/members.html",
    },
  },
  category: "apikey",
  transport: {
    baseUrl: "https://g4f.space/api/nvidia/v1/chat/completions",
    validateUrl: "https://g4f.space/api/nvidia/v1/models",
  },
  models: [
    { id: "nvidia/nemotron-3-nano-30b-a3b", name: "Nemotron 3 Nano 30B (g4f/NVIDIA)" },
    { id: "z-ai/glm-5.2", name: "GLM 5.2 (g4f/NVIDIA)" },
    { id: "minimaxai/minimax-m2.7", name: "MiniMax M2.7 (g4f/NVIDIA)" },
  ],
}
