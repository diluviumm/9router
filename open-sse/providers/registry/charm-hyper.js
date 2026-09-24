export default {
  id: "charm-hyper",
  priority: 50,
  hasFree: true,
  alias: "charm-hyper",
  display: {
    name: "Charm Hyper",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "CH",
    website: "https://hyper.charm.land",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://hyper.charm.land/v1/chat/completions",
    validateUrl: "https://hyper.charm.land/v1/models",
  },
  models: [
    { id: "hyper/auto", name: "Charm Hyper Auto" },
  ],
}
