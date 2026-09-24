export default {
  id: "friendliai",
  priority: 50,
  hasFree: true,
  alias: "friendliai",
  display: {
    name: "FriendliAI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "FR",
    website: "https://friendli.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.friendli.ai/serverless/v1/chat/completions",
    validateUrl: "https://api.friendli.ai/serverless/v1/models",
  },
  models: [
    { id: "meta-llama-3.1-70b-instruct", name: "meta-llama-3.1-70b-instruct" },
    { id: "meta-llama-3.1-8b-instruct", name: "meta-llama-3.1-8b-instruct" },
  ],
}
