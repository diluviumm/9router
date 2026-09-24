export default {
  id: "iflytek",
  priority: 50,
  hasFree: true,
  alias: "iflytek",
  display: {
    name: "iFlytek Spark",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "IS",
    website: "https://xinghuo.xfyun.cn",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://spark-api-open.xf-yun.com/v1/chat/completions",
    validateUrl: "https://spark-api-open.xf-yun.com/v1/models",
  },
  models: [
    { id: "4.0Ultra", name: "Spark 4.0 Ultra" },
    { id: "generalv3.5", name: "Spark Max (V3.5)" },
    { id: "max-32k", name: "Spark Max 32K" },
    { id: "generalv3", name: "Spark Pro" },
    { id: "pro-128k", name: "Spark Pro 128K" },
    { id: "lite", name: "Spark Lite" },
  ],
}
