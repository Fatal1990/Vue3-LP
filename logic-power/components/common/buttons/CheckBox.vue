<template>
  <label class="checkbox" @click="checked = !checked">
    <input type="checkbox" />
    <slot class="checkbox__caption"></slot>
  </label>
</template>

<script setup>
const checked = ref(false);
</script>

<style lang="scss"></style>
