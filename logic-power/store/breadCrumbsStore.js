import { useCategoriesStore } from './categoriesStore';

const recurse = (slug) => {};

export const useBreadCrumbsStore = defineStore({
  id: 'breadCrumbStore',
  state: () => {
    return {
      breadCrumbs: [],
    };
  },
  actions: {
    setCrumb(slug) {
      this.breadCrumbs = []; //recurse(slug);
    },
  },
  getters: {
    getBreadCrumbs: (state) => state.breadCrumbs,
  },
});
