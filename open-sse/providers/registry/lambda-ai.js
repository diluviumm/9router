export default {
  id: "lambda-ai",
  priority: 50,
  alias: "lambda-ai",
  display: {
    name: "Lambda AI",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "LA",
    website: "https://lambda.ai",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.lambda.ai/v1/chat/completions",
    validateUrl: "https://api.lambda.ai/v1/models",
  },
  models: [
    { id: "deepseek-r1-671b", name: "deepseek-r1-671b" },
    { id: "llama3.3-70b-instruct-fp8", name: "llama3.3-70b-instruct-fp8" },
    { id: "qwen25-coder-32b-instruct", name: "qwen25-coder-32b-instruct" },
  ],
}
