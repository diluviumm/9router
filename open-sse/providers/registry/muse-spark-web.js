export default {
  id: "muse-spark-web",
  priority: 50,
  hasFree: true,
  alias: "muse-spark-web",
  display: {
    name: "Muse Spark Web (Meta AI)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "MS",
    website: "https://www.meta.ai",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://www.meta.ai/api/graphql",
  },
  models: [
    { id: "muse-spark", name: "Muse Spark" },
    { id: "muse-spark-thinking", name: "Muse Spark Thinking" },
    { id: "muse-spark-contemplating", name: "Muse Spark Contemplating" },
  ],
}
