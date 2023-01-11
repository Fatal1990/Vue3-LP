import languages from '~/utils/languages';

export const useLanguageFilterStore = defineStore({
  id: 'languageFilterStore',
  state: () => {
    return {
      languageFilter: languages.map((el) => el.name),
      currentLanguage: languages.find((el) => el.default).name,
    };
  },
  actions: {
    setLanguage(lang) {
      this.currentLanguage = lang;
    },
  },
  getters: {
    getFiltersList: (state) => state.languageFilter,
    getCurrentLanguage: (state) => state.currentLanguage,
  },
});
