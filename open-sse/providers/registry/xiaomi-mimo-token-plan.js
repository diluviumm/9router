export default {
  id: "xiaomi-mimo-token-plan",
  priority: 50,
  alias: "xiaomi-mimo-token-plan",
  display: {
    name: "Xiaomi MiMo Token Plan",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "XM",
    website: "https://mimo.mi.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://token-plan-sgp.xiaomimimo.com/v1",
    validateUrl: "https://token-plan-sgp.xiaomimimo.com/v1/models",
  },
  models: [
    { id: "mimo-v2.5-pro", name: "MiMo-V2.5-Pro" },
    { id: "mimo-v2.5", name: "MiMo-V2.5" },
  ],
}
