<template>
  <div>
    <div v-if="category?.children.length">
      <Catalog :categories="category.children" />
    </div>
    <div v-else>
      <h3>Catalog {{ categorySlug }}</h3>
      <div class="catalog-list__items" v-if="products.length">
        <CardProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
          :change-view="null"
        />
      </div>
      <div v-else>Товары не найдены...</div>
    </div>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '~~/store/categoriesStore';
import CardProduct from '~~/components/catalog/sections/cardProduct/CardProduct.vue';
import Catalog from '~~/components/catalog/Catalog.vue';

const { urlLang, categorySlug } = useRoute().params;

const lang = urlLang ? urlLang : 'ru';

const categoryStore = useCategoriesStore();
const category = categoryStore.getCategoryBySlug(categorySlug);

const { data: products } = await useFetch(
  `/api/products?pageSize=25&pageNum=1&categoryId=${category.id}`,
);
</script>

<style lang="scss" scoped>
.catalog-list {
  &__wrapper {
    @include flex-container(column, flex-start);

    gap: 64px;
    margin-bottom: 64px;
  }

  &__items {
    @include flex-container(row, space-between);
    flex-wrap: wrap;

    gap: 8px;
  }

  &__navigation {
    @include flex-container(column, center, center);

    gap: 32px;
  }

  &__pagination {
    @include flex-container(row, center, center);

    gap: 26px;
  }

  &__pages {
    @include flex-container(row, center, center);

    gap: 26px;
  }
}
</style>
