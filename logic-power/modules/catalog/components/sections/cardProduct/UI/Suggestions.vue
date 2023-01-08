<template>
  <section class="suggestions" :class="status">
    <span class="suggestions__name novelty">Новинка</span>
    <span class="suggestions__name stock">Акция</span>
    <span class="suggestions__name top-sales">Топ продаж</span>
  </section>
</template>

<script setup>
const { status } = defineProps(['status']);
</script>

<style lang="scss" scoped>
.suggestions {
  border-radius: 4px;

  padding: 4px 8px;
  &.novelty {
    background-color: #159822;
    .suggestions__name.novelty {
      display: block;
    }
  }

  &.stock {
    background-color: #eb1717;
    .suggestions__name.stock {
      display: block;
    }
  }

  &.top-sales {
    background-color: #4490bb;
    .suggestions__name.top-sales {
      display: block;
    }
  }

  &__name {
    display: none;

    /*@include fontUnify(10, 14, 400);*/
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: white;
  }
}
</style>
