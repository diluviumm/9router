export default {
  id: "chatgpt-web-codex",
  priority: 50,
  alias: "chatgpt-web-codex",
  display: {
    name: "ChatGPT Web (Codex)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "CW",
    website: "https://chatgpt.com",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://chatgpt.com",
  },
  models: [
    { id: "luna", name: "ChatGPT Web \u2014 Luna" },
    { id: "think", name: "ChatGPT Web \u2014 Think" },
    { id: "instant", name: "ChatGPT Web \u2014 Instant" },
    { id: "medium", name: "ChatGPT Web \u2014 Medium" },
    { id: "high", name: "ChatGPT Web \u2014 High" },
    { id: "extra-high", name: "ChatGPT Web \u2014 Extra High" },
    { id: "pro", name: "ChatGPT Web \u2014 Pro" },
  ],
}
