export default {
  id: "seekai",
  priority: 50,
  hasFree: true,
  alias: "seekai",
  display: {
    name: "SeekAi",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "SE",
    website: "https://seekai.cc",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://seekai.cc/v1/chat/completions",
    validateUrl: "https://seekai.cc/v1/models",
  },
  models: [
  ],
}
