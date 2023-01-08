export const categoryFlatten = (categories, parent = undefined) => {
  return categories.reduce((result, item) => {
    item.parentSlug = parent;
    return [...result, item, ...categoryFlatten(item.children, item.slug)];
  }, []);
};

export const categoryHeader = (categories) => {
  const result = [];

  categories.forEach((item) => {
    const image = item.images.find((el) => el.type === 'icon');

    const menuItem = { id: item.id, name: item.name, img: image?.url };

    if (item.children?.length) result.children = categoryHeader(item.children);

    result.push(menuItem);
  });

  return result;
};
