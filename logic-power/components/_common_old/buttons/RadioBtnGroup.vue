<template>
  <div class="radio-label__w">
    <label
      class="radio-label"
      :for="input.value"
      v-for="input of inputList"
      :key="input.value"
    >
      <input
        type="radio"
        :id="input.value"
        :value="input.value"
        :name="name"
        :checked="isChecked"
        @input="$emit('input', $event.target.value)"
      />
      <span class="radio-label__checkmark"></span>
      <span class="radio-label__option">{{ input.title }}</span>
    </label>
  </div>
</template>

<script setup>
defineProps(["inputList", "name", "isChecked"]);
</script>

<style lang="scss"></style>
