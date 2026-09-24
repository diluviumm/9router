export default {
  id: "gigachat",
  priority: 50,
  alias: "gigachat",
  display: {
    name: "GigaChat (Sber)",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "GS",
    website: "https://developers.sber.ru",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://gigachat.devices.sberbank.ru/api/v1",
    validateUrl: "https://gigachat.devices.sberbank.ru/api/v1/models",
  },
  models: [
    { id: "GigaChat-2-Max", name: "GigaChat-2-Max" },
    { id: "GigaChat-2-Pro", name: "GigaChat-2-Pro" },
    { id: "GigaChat-2-Lite", name: "GigaChat-2-Lite" },
  ],
}
