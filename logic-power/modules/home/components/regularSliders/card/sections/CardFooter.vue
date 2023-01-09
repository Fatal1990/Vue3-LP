<template>
  <footer class="card-footer">
    <Price :price="price" :inactive="inactive" />
    <ButtonBuy :state="status" :inactive="inactive" />
  </footer>
</template>

<script setup>
import ButtonBuy from "~/modules/home/components/regularSliders/card/UI/ButtonBuy.vue";
import Price from "~/modules/home/components/regularSliders/card/UI/Price.vue";

defineProps({
  status: { type: String, required: true },
  price: { type: Object, required: true },
  inactive: { type: Boolean, required: true },
});
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
