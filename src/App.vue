<template>
  <div id="app">
    <router-view v-bind:developers="developers" :StoreData="StoreData"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      developers: ["frontend", "backend"],
      StoreData: [],
    };
  },
};
</script>

<style></style>
