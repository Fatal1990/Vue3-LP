<template>
  <header 
    class="card-header"
    :class="{inactive: inactive}"
  >
    <div class="card-header__wrapper">
      <div v-if="!inactive"  class="card-header__suggestions">
        <Suggestions 
          v-for="(item,index) in status"
          :key="index"
          :status="item" 
        />
      </div>
      <HeaderButtons />
    </div>
  </header>
</template>

<script setup>
import HeaderButtons from "~/modules/home/components/regularSliders/card/sections/HeaderButtons.vue";
import Suggestions from "~/modules/home/components/regularSliders/card/UI/Suggestions.vue";

defineProps({
    inactive: { type: Boolean, required: false},
    status: { type: Array, required: true},
});

const typeAvailability = {
    novelty: "novelty",
    stock: "stock",
    sales: "top-sales",
};

</script>

<style lang="scss" scoped>
.card-header {

  &.inactive {
    .card-header__wrapper {
      @include flex-container(row, flex-end, center);
    }
  }

  &__wrapper {
    @include flex-container(row, space-between, flex-start);

    padding: 0 16px;

    @include bigMobile {
      padding: 0 8px;
    }
  }

  &__suggestions {
    @include flex-container(column, flex-start, flex-start);

    gap: 4px;
  }
}
</style>
    