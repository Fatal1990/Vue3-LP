import { useCategoriesStore } from './../store/categoriesStore';

export const getFullPath = (slug) => {
  const categoriesStore = useCategoriesStore();
  const categories = categoriesStore.getFlattenCategories;
  const startPath = { ru: 'Каталог', uk: 'Каталог', path: '/catalog' };

  const result = [];

  const tree = (currentSlug) => {
    const currentCategory = categories.find(
      (element) => element.slug === currentSlug,
    );

    result.push({
      ru: currentCategory.name.ru,
      uk: currentCategory.name.uk,
      path: `/${currentSlug}`,
    });

    if (currentCategory?.parentSlug) {
      tree(currentCategory.parentSlug);
    }
  };

  tree(slug);

  result.reverse();

  const fullPath = [startPath, ...result];

  return fullPath;
};
