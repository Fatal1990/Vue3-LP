<template>
  <span v-if="icon" :class="attrs.class" v-html="icon" />
</template>

<script setup>
const { url } = defineProps(['url']);

const attrs = useAttrs();

let icon;

try {
  const response = await useFetch(`/api/remoteSvg?url=${url}`);
  icon = url && response.data;
} catch (e) {
  console.log(e);
}
</script>

<style lang="scss"></style>
