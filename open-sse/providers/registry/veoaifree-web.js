export default {
  id: "veoaifree-web",
  priority: 50,
  hasFree: true,
  alias: "veoaifree-web",
  display: {
    name: "Veo AI Free",
    icon: "cloud",
    color: "#6B7280",
    textIcon: "VA",
    website: "https://veoaifree.com",
  },
  category: "apikey",
  transport: {
    baseUrl: "https://veoaifree.com/wp-admin/admin-ajax.php",
  },
  models: [
    { id: "veo", name: "VEO 3.1" },
    { id: "seedance", name: "Seedance" },
  ],
}
