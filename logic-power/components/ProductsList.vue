<template>
  <div>
    <h3>List of products:</h3>
    <div v-if="products">
      <ul>
        <li v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p><Loader /></p>
    </div>
  </div>
</template>

<script setup>
import { productsFilter } from "~~/utils/queryParams";

const params = {
  baseQuery: "/api/products",
  pageNum: 1,
  pageSize: 20,
};

const query = productsFilter(params);

const { data: products } = await useFetch(query);
</script>
