export default {
  id: "monsterapi",
  priority: 50,
  hasFree: true,
  alias: "monsterapi",
  display: {
    name: "MonsterAPI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "MO",
    website: "https://monsterapi.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.monsterapi.ai/v1/chat/completions",
    validateUrl: "https://api.monsterapi.ai/v1/models",
  },
  models: [
    { id: "meta-llama/Meta-Llama-3.1-8B-Instruct", name: "Llama 3.1 8B Instruct" },
    { id: "meta-llama/Llama-3.3-70B-Instruct", name: "Llama 3.3 70B Instruct" },
  ],
}
