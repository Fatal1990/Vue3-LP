import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const route = routes(dirname);

export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
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
  hooks: {
    'pages:extend'(pages) {
      pages.push(...route);
    },
  },
});
