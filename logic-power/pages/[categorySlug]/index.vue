<template>
  <div>
    <h3>Catalog {{ categorySlug }}</h3>
    <div v-if="products.length">
      <CardProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
        :change-view="null"
      />
    </div>
    <div v-else>Продукты не найдены...</div>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '~~/store/categoriesStore';
import CardProduct from '../../components/catalog/sections/cardProduct/CardProduct.vue';

const { urlLang, categorySlug } = useRoute().params;

const lang = urlLang ? urlLang : 'ru';

const categoryStore = useCategoriesStore();
const category = categoryStore.getCategoryBySlug(categorySlug);

const testId = '5b1b63e8-a04b-4244-8ae3-a4c18b409b33';

const { data: products } = await useFetch(
  //`/api/products?pageSize=25&pageNum=1&categoryId=${category.id}`
  `/api/products?pageSize=25&pageNum=1&categoryId=${testId}`,
);
</script>

<style scoped></style>
