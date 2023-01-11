export const categoryFlatten = (categories, parent = undefined) => {
  return categories.reduce((result, item) => {
    item.parentSlug = parent;
    return [...result, item, ...categoryFlatten(item.children, item.slug)];
  }, []);
};

export const categoryHeader = (categories, parentId) => {
  const result = [];

  categories.forEach((item) => {
    const image = item.images.find((el) => el.type === 'icon');

    const menuItem = {
      id: item.id,
      name: item.name,
      img: image?.url,
      parentId: parentId,
    };

    if (item.children?.length) {
      menuItem.children = categoryHeader(item.children, item.id);
    }

    result.push(menuItem);
  });

  return result;
};
