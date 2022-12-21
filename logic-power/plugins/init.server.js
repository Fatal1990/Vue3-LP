import { useCategoriesStore } from '~/store/categoriesStore';
import { useI18nStore } from '~/store/i18nStore';

export default defineNuxtPlugin(async (nuxtApp) => {
  const categories = useCategoriesStore(nuxtApp.$pinia);
  await categories.fetch();

  const translations = useI18nStore(nuxtApp.$pinia);
  await translations.fetch();
});
