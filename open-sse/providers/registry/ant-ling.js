export default {
  id: "ant-ling",
  priority: 50,
  hasFree: true,
  alias: "ant-ling",
  display: {
    name: "Ant Ling / Ring (inclusionAI)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AL",
    website: "https://developer.ant-ling.com/en/docs/",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.ant-ling.com/v1/chat/completions",
    validateUrl: "https://api.ant-ling.com/v1/models",
  },
  models: [
    { id: "Ling-2.6-1T", name: "Ling 2.6 1T" },
    { id: "Ring-2.6-1T", name: "Ring 2.6 1T" },
    { id: "Ling-2.6-flash", name: "Ling 2.6 Flash" },
  ],
}
