<template>
  <div>
    <h3>Catalog:</h3>
    <div v-if="catalogs">
      <ul>
        <li v-for="item in catalogs" :key="item.id">
          {{ item.name[currentLanguage] }}
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

const { data: catalogs } = useFetch('/api/catalog');

const lang = useLanguageFilterStore();
const { currentLanguage } = storeToRefs(lang);
</script>
