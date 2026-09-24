export default {
  id: "bedrock",
  priority: 50,
  alias: "bedrock",
  display: {
    name: "Amazon Bedrock",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "AB",
    website: "https://aws.amazon.com/bedrock",
  },
  category: "apikey",
  models: [
    { id: "anthropic.claude-fable-5-1", name: "Claude Fable 5.1 (Bedrock)" },
    { id: "anthropic.claude-sonnet-4-6", name: "Claude Sonnet 4.6 (Bedrock)" },
    { id: "anthropic.claude-sonnet-4-5", name: "Claude Sonnet 4.5 (Bedrock)" },
    { id: "anthropic.claude-opus-4-6", name: "Claude Opus 4.6 (Bedrock)" },
    { id: "anthropic.claude-opus-4-7", name: "Claude Opus 4.7 (Bedrock)" },
    { id: "anthropic.claude-haiku-4-5", name: "Claude Haiku 4.5 (Bedrock)" },
    { id: "openai.gpt-oss-120b-1:0", name: "GPT-OSS 120B (Bedrock)" },
  ],
}
