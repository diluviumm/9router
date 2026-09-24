export default {
  id: "clova-studio",
  priority: 50,
  alias: "clova-studio",
  display: {
    name: "Naver CLOVA Studio",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "NC",
    website: "https://api.ncloud-docs.com/docs/en/ai-naver-clovastudio-summary",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://clovastudio.stream.ntruss.com/v3/chat-completions",
  },
  models: [
    { id: "HCX-007", name: "HCX-007" },
    { id: "HCX-005", name: "HCX-005" },
    { id: "HCX-DASH-002", name: "HCX-DASH-002" },
  ],
}
