export default {
  id: "nara",
  priority: 50,
  hasFree: true,
  alias: "nara",
  display: {
    name: "NaraRouter",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "NA",
    website: "https://bynara.id",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://router.bynara.id/v1/chat/completions",
    validateUrl: "https://router.bynara.id/v1/models",
  },
  models: [
    { id: "agnes-2.0-flash", name: "Agnes 2.0 Flash" },
    { id: "agnes-2.5-flash", name: "Agnes 2.5 Flash" },
    { id: "laguna-s-2.1", name: "Laguna S 2.1" },
    { id: "minimax-m3-free", name: "MiniMax M3 (free)" },
    { id: "mistral-large", name: "Mistral Large" },
    { id: "mistral-medium-3-5", name: "Mistral Medium 3.5" },
    { id: "qwen3.8-27b", name: "Qwen3.8 27B" },
    { id: "stepfun-3.7-flash", name: "StepFun 3.7 Flash" },
  ],
}
