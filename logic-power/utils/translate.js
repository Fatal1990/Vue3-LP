import { useLanguageFilterStore } from '~~/store/languageFilterStore';
import { storeToRefs } from 'pinia';

const { data } = await useFetch('/api/translations');

const lang = useLanguageFilterStore();
const { currentLanguage } = storeToRefs(lang);

export const _T = (keyText) => {
  if (data.value[keyText] === undefined) return keyText;

  return data.value[keyText][currentLanguage.value];
};
