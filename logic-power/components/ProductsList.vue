<template>
  <div>
    <h3>List of products:</h3>
    <div v-if="products">
      <ul>
        <li v-for="product in products" :key="product">
          {{ product.name[currentLanguage] }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p><Loader /></p>
    </div>
  </div>
</template>

<script setup>
import { useLanguageFilterStore } from '~~/store/languageFilterStore';
import { storeToRefs } from 'pinia';

const { data: products } = useFetch('/api/products?pageSize=20&pageNum=1');

const lang = useLanguageFilterStore();
const { currentLanguage } = storeToRefs(lang);
</script>
