export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'ru',
            name: 'Рус',
            iso: 'ru-RU',
          },
          {
            code: 'ua',
            name: 'Укр',
            iso: 'uk-UA',
          },
        ],
        baseUrl: 'https://logicpower.ua',
        defaultLocale: 'ru',
        detectBrowserLanguage: false,
        strategy: 'prefix_except_default',
        vueI18n: {
          legacy: false,
        },
      },
    ],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/index.scss" as *;',
        },
      },
    },
  },
});
