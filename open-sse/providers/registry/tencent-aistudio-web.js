export default {
  id: "tencent-aistudio-web",
  priority: 50,
  hasFree: true,
  alias: "tencent-aistudio-web",
  display: {
    name: "Tencent AI Studio (Free)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "TA",
    website: "https://aistudio.tencent.ai",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://aistudio.tencent.ai/api/chat",
  },
  models: [
    { id: "hy3-g", name: "HY3-G (via Tencent AI Studio)" },
    { id: "hunyuan-default", name: "Hunyuan Default (via Tencent AI Studio)" },
    { id: "hunyuan-3d", name: "Hunyuan 3D (via Tencent AI Studio)" },
  ],
}
