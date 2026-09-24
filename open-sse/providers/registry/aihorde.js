export default {
  id: "aihorde",
  priority: 50,
  hasFree: true,
  alias: "aihorde",
  display: {
    name: "AI Horde",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AH",
    website: "https://aihorde.net",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://oai.aihorde.net/v1/chat/completions",
    validateUrl: "https://oai.aihorde.net/v1/models",
  },
  models: [
    { id: "aphrodite/TheDrummer/Cydonia-24B-v4.3", name: "Cydonia 24B (AI Horde)" },
    { id: "aphrodite/TheDrummer/Skyfall-31B-v4.2", name: "Skyfall 31B (AI Horde)" },
    { id: "google/gemma-4-31b", name: "Gemma 4 31B (AI Horde)" },
  ],
}
