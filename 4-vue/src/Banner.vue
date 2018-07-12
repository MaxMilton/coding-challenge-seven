<template>
  <div class="banner">
    <img :src="tile" :alt="title" class="tile" />

    <div class="overlay">
      <img :src="logo" :alt="logoAlt" class="network" />

      <h3 class="title">
        {{ title }}
      </h3>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tile: String,
      title: String,
      logo: {
        type: String,
        default: '../logo.png',
      },
      logoAlt: {
        type: String,
        default: '7plus',
      },
    },
  };
</script>

<style scoped>
  .banner {
    position: relative;
    display: inline-block;
  }

  .tile {
    display: block;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .network {
    width: auto;
    height: 4.6rem;
  }

  .title {
    margin: 0 0 0 1rem;
    font-family: sans-serif;
    font-size: 2.2rem;
    color: rgb(255, 255, 255);
  }
</style>
