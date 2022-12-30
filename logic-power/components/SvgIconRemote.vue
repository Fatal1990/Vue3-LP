<template>
  <span v-if="icon" v-html="icon" />
</template>

<script setup>
import axios from 'axios';

const { url } = defineProps(['url']);

const response = await axios.get(url);

const icon = url && response.data;
</script>

<style lang="scss"></style>
