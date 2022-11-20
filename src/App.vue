<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Go to home</router-link>
      </li>

      <li>
        <router-link :to="{ name: 'page', params: { id: 2} }">Go to other page</router-link>
      </li>
    </ul>

    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

