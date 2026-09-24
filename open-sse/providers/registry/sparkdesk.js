export default {
  id: "sparkdesk",
  priority: 50,
  hasFree: true,
  alias: "sparkdesk",
  display: {
    name: "SparkDesk",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "SP",
    website: "https://xinghuo.xfyun.cn",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://spark-api-open.xf-yun.com/v1/chat/completions",
    validateUrl: "https://spark-api-open.xf-yun.com/v1/models",
  },
  models: [
    { id: "4.0Ultra", name: "Spark 4.0 Ultra" },
    { id: "generalv3", name: "Spark Pro" },
    { id: "pro-128k", name: "Spark Pro 128K" },
    { id: "lite", name: "Spark Lite" },
  ],
}
