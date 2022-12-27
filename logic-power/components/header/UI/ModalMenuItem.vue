<template>
  <div class="menu-item">
    <div class="menu-item__image">
      <slot name="image"></slot>
    </div>
    <div class="menu-item__titles">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.menu-item {
  @include flex-container(row, flex-start, center);

  gap: 32px;
  padding: 8px 8px 8px 0;

  &__image {
    font-size: 0;
  }

  &__titles {
    @include flex-container(column, flex-start, center);
  }
}
</style>