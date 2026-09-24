export default {
  id: "gitlawb",
  priority: 50,
  alias: "gitlawb",
  display: {
    name: "Gitlawb Opengateway (MiMo)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "GO",
    website: "https://opengateway.gitlawb.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://opengateway.gitlawb.com/v1/xiaomi-mimo",
  },
  models: [
    { id: "mimo-v2.5-pro", name: "MiMo-V2.5-Pro" },
    { id: "mimo-v2.5", name: "MiMo-V2.5" },
    { id: "mimo-v2-pro", name: "MiMo-V2-Pro" },
    { id: "mimo-v2-omni", name: "MiMo-V2-Omni" },
    { id: "mimo-v2-flash", name: "MiMo-V2-Flash" },
  ],
}
