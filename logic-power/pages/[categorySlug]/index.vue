<template>
  <h3>Catalog {{ categorySlug }}</h3>
</template>

<script setup>
const { categorySlug } = useRoute().params;
const { categoryId } = useRoute().meta;
console.log(useRoute().meta);
</script>

<style scoped></style>
