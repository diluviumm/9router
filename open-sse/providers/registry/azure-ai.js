export default {
  id: "azure-ai",
  priority: 50,
  alias: "azure-ai",
  display: {
    name: "Azure AI Foundry",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AA",
    website: "https://learn.microsoft.com/azure/ai-foundry",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://example-resource.services.ai.azure.com/openai/v1",
    validateUrl: "https://example-resource.services.ai.azure.com/openai/v1/models",
  },
  models: [
  ],
}
