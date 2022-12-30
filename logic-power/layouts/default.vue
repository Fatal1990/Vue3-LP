<template>
  <div>
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useLanguageFilterStore } from '~~/store/languageFilterStore';
import Header from '~~/components/header/Header.vue';
import Footer from '~~/components/footer/Footer.vue';

const lang = useLanguageFilterStore();

const languageList = lang.getFiltersList;

const toggleLanguage = (item) => {
  lang.setLanguage(item);
};
</script>

<style scoped></style>
