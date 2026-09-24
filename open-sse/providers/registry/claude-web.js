export default {
  id: "claude-web",
  priority: 50,
  alias: "claude-web",
  display: {
    name: "Claude Web",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "CW",
    website: "https://claude.ai",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://claude.ai/api/organizations",
  },
  models: [
    { id: "claude-fable-5-1", name: "Claude Fable 5.1 (web)" },
    { id: "claude-fable-5", name: "Claude Fable 5 (web)" },
    { id: "claude-opus-5", name: "Claude Opus 5 (web)" },
    { id: "claude-opus-4-8", name: "Claude Opus 4.8 (web)" },
    { id: "claude-opus-4-7", name: "Claude Opus 4.7 (web)" },
    { id: "claude-opus-4-6", name: "Claude Opus 4.6 (web)" },
    { id: "claude-sonnet-5", name: "Claude Sonnet 5 (web)" },
    { id: "claude-sonnet-4-6", name: "Claude Sonnet 4.6 (web)" },
    { id: "claude-haiku-4-5-20251001", name: "Claude Haiku 4.5 (web)" },
  ],
}
