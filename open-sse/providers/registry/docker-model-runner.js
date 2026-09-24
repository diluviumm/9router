export default {
  id: "docker-model-runner",
  priority: 50,
  alias: "docker-model-runner",
  display: {
    name: "Docker Model Runner",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "DM",
    website: "https://docs.docker.com/ai/model-runner/",
  },
  category: "apikey",
  transport: {
    baseUrl: "http://localhost:12434/v1",
    validateUrl: "http://localhost:12434/v1/models",
  },
  models: [
  ],
}
