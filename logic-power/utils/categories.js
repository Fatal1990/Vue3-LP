export const categoryFlatten = (nestedCategories, parent = undefined) => {
  return nestedCategories.reduce((result, item) => {
    item.parentSlug = parent;
    return [...result, item, ...categoryFlatten(item.children, item.slug)];
  }, []);
};
