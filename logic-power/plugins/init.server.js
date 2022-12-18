import { useCategoriesStore } from '~/store/categoriesStore';

export default defineNuxtPlugin(async (nuxtApp) => {
  const categories = useCategoriesStore(nuxtApp.$pinia);
  await categories.fetch();
});
