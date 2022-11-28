<template>
  <div>
    <button
      v-for="(item, index) in languageList"
      :key="index"
      @click="() => toggleLanguage(item)"
    >
      {{ item }}
    </button>
    <ProductsList />
  </div>
</template>

<script setup>
import { useLanguageFilterStore } from '~~/store/languageFilterStore';

const lang = useLanguageFilterStore();

const languageList = lang.getFiltersList;

const toggleLanguage = (item) => {
  lang.setLanguage(item);
};
</script>
