export default {
  id: "stepfun",
  priority: 50,
  hasFree: true,
  alias: "stepfun",
  display: {
    name: "StepFun",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "ST",
    website: "https://stepfun.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.stepfun.com/v1/chat/completions",
    validateUrl: "https://api.stepfun.com/v1/models",
  },
  models: [
    { id: "step-3.7-flash", name: "Step 3.7 Flash" },
    { id: "step-3.5-flash", name: "Step 3.5 Flash" },
    { id: "step-3.5-flash-2603", name: "Step 3.5 Flash 2603" },
    { id: "step-1o-turbo-vision", name: "Step 1o Turbo Vision" },
    { id: "step-1v", name: "Step 1V" },
  ],
}
