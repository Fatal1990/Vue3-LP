<template>
  <span v-if="icon" v-html="icon" :class="attrs.class" />
</template>

<script setup>
const { name } = defineProps(['name']);

const icons = Object.fromEntries(
  Object.entries(import.meta.glob('~/assets/icons/*.svg', { as: 'raw' })).map(
    ([key, value]) => {
      const filename = key.split('/').pop().split('.').shift();
      return [filename, value];
    },
  ),
);

const attrs = useAttrs();

const icon = name && (await icons?.[name]?.());
</script>

<style lang="scss"></style>
