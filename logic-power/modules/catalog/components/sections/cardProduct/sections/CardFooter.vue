<template>
  <footer class="card-footer">
    <Price :price="price" :inactive="inactive" />
    <ButtonBuy :state="status.buttonState.buy" :inactive="inactive" />
  </footer>
</template>

<script setup>
import Price from '../UI/Price.vue';
import ButtonBuy from '../UI/ButtonBuy.vue';

const { status, price, inactive } = defineProps([
  'status',
  'price',
  'inactive',
]);
</script>

<style lang="scss" scoped>
.card-footer {
  @include flex-container(column, center);

  gap: 8px;

  &__price {
    @include font(28, 39, 600);
    letter-spacing: 0.02em;
    color: #f36c21;

    @include bigMobile {
      @include font(16, 22, 500);
    }
  }
}
</style>
