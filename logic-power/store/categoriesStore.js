import axios from 'axios';
import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore({
  id: 'categoryStore',
  state: () => {
    return { categories: [] };
  },
  actions: {
    async fetch() {
      const { data } = await axios.get(
        'https://dev.api.logicpower.ua/user/catalog/category/list/tree',
      );
      this.categories = data.data;
    },
  },
  getters: {
    getCategories: (state) => state.categories,
    getCategoryBySlug: (state) => {
      return (slug) =>
        state.categories.find((category) => category.slug === slug);
    },
  },
});
