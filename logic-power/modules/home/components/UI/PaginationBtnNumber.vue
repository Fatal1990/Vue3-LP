<template>
  <button class="pagination-button">
    <span class="pagination-button__number">{{ number }}</span>
  </button>
</template>

<script setup>
defineProps({
  number: { type: Number, required: true},
});
</script>

<style lang="scss" scoped>
.pagination-button {
  width: 48px;
  height: 48px;

  @include flex-container(column, center, center);

  border-radius: 50%;

  background-color: white;
  border: 1px solid #D1D1D1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  transition: box-shadow .1s ease-in-out;

  &:hover {
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  }

  &.active {
    border-color: #F3F3F3;
    background-color: #F3F3F3;
  }

  &__number {
    @include font(20, 30, 600);
    color: #2B2B2B;
    text-transform: uppercase;
  }
}

</style>