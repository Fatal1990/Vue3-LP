<template>
  <footer class="card-footer">
    <CatalogSectionsCardProductUIPrice :price="price" :inactive="inactive" />
    <CatalogSectionsCardProductUIButtonBuy
      :state="status.buttonState.buy"
      :inactive="inactive"
    />
  </footer>
</template>

<script setup>
const { status, price, inactive } = defineProps(["status", "price", "inactive"]);
</script>

<style lang="scss" scoped>
.card-footer {
  @include flex-container(column, center);

  gap: 8px;

  &__price {
    @include fontUnify(28, 39, 600);
    letter-spacing: 0.02em;
    color: #f36c21;

    @include bigMobile {
      @include fontUnify(16, 22, 500);
    }
  }
}
</style>
