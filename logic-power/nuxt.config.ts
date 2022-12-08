export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
  ],
  css: ['~/assets/scss/index.scss'],
});
