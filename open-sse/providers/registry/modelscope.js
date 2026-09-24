export default {
  id: "modelscope",
  priority: 50,
  hasFree: true,
  alias: "modelscope",
  display: {
    name: "ModelScope",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "MO",
    website: "https://modelscope.cn",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api-inference.modelscope.cn/v1/chat/completions",
    validateUrl: "https://api-inference.modelscope.cn/v1/models",
  },
  models: [
  ],
}
