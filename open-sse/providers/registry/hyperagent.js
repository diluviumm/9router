export default {
  id: "hyperagent",
  priority: 50,
  alias: "hyperagent",
  display: {
    name: "HyperAgent (Unofficial/Experimental)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "HU",
    website: "https://hyperagent.com",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://hyperagent.com/api/threads",
  },
  models: [
    { id: "fable-latest", name: "Fable 5" },
    { id: "claude-fable-5", name: "Claude Fable 5" },
    { id: "opus-latest", name: "Claude Opus Latest" },
    { id: "claude-opus-4-8", name: "Claude Opus 4.8" },
    { id: "sonnet-latest", name: "Claude Sonnet Latest" },
    { id: "claude-sonnet-5", name: "Claude Sonnet 5" },
  ],
}
