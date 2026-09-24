export default {
  id: "yuanbao-web",
  priority: 50,
  hasFree: true,
  alias: "yuanbao-web",
  display: {
    name: "Tencent Yuanbao (Free)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "TY",
    website: "https://yuanbao.tencent.com",
  },
  category: "webCookie",
  transport: {
    baseUrl: "https://yuanbao.tencent.com/api/chat",
  },
  models: [
    { id: "deepseek-v3", name: "DeepSeek V3 (via Yuanbao)" },
    { id: "deepseek-r1", name: "DeepSeek R1 (via Yuanbao)" },
    { id: "hunyuan", name: "Hunyuan (via Yuanbao)" },
    { id: "hunyuan-t1", name: "Hunyuan T1 (via Yuanbao)" },
    { id: "deepseek-v3-search", name: "DeepSeek V3 + Web Search (via Yuanbao)" },
    { id: "deepseek-r1-search", name: "DeepSeek R1 + Web Search (via Yuanbao)" },
    { id: "hunyuan-search", name: "Hunyuan + Web Search (via Yuanbao)" },
    { id: "hunyuan-t1-search", name: "Hunyuan T1 + Web Search (via Yuanbao)" },
  ],
}
