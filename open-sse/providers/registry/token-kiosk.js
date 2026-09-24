export default {
  id: "token-kiosk",
  priority: 50,
  alias: "token-kiosk",
  display: {
    name: "Token Kiosk",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "TK",
    website: "https://agent-router.gaib.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://agent-router.gaib.ai/v1/chat/completions",
    validateUrl: "https://agent-router.gaib.ai/v1/models",
  },
  models: [
    { id: "claude-3-5-sonnet", name: "Claude 3.5 Sonnet (Token Kiosk)" },
    { id: "deepseek-v3", name: "DeepSeek V3 (Token Kiosk)" },
    { id: "deepseek-r1", name: "DeepSeek R1 (Token Kiosk)" },
    { id: "kimi-k1.5", name: "Kimi K1.5 (Token Kiosk)" },
    { id: "minimax-m6", name: "MiniMax M6 (Token Kiosk)" },
  ],
}
