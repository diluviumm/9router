export default {
  id: "longcat",
  priority: 50,
  hasFree: true,
  alias: "longcat",
  display: {
    name: "LongCat AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LA",
    website: "https://longcat.chat/platform/docs",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.longcat.chat/openai/v1/chat/completions",
    validateUrl: "https://api.longcat.chat/openai/v1/models",
  },
  models: [
    { id: "LongCat-2.0", name: "LongCat 2.0 (10M tok free \ud83c\udd93)" },
  ],
}
