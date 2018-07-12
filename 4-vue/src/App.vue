<template>
  <div id="app">
    <Banner tile="../tile.jpg" title="Home And Away" />
  </div>
</template>

<script>
  import Banner from './Banner.vue';

  export default {
    components: {
      Banner,
    },
  };
</script>

<style>
  body {
    margin: 6rem;
    background-color: rgb(0, 0, 0);
  }
</style>
