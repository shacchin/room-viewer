// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Room Viewer",
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
