export default {
  id: "snowflake",
  priority: 50,
  alias: "snowflake",
  display: {
    name: "Snowflake Cortex",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "SC",
    website: "https://www.snowflake.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://{account}.snowflakecomputing.com/api/v2",
  },
  models: [
    { id: "llama3.1-70b", name: "llama3.1-70b" },
    { id: "llama3.3-70b", name: "llama3.3-70b" },
    { id: "deepseek-r1", name: "deepseek-r1" },
    { id: "claude-3-5-sonnet", name: "claude-3-5-sonnet" },
  ],
}
