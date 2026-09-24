export default {
  id: "yolo-auto",
  priority: 50,
  hasFree: true,
  alias: "yolo-auto",
  display: {
    name: "Yolo-Auto",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "YA",
    website: "https://yolo-auto.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://yolo-auto.com/v1/chat/completions",
    validateUrl: "https://yolo-auto.com/v1/models",
  },
  models: [
    { id: "qwen3.6-35b-a3b", name: "Qwen 3.6 35B A3B" },
  ],
}
