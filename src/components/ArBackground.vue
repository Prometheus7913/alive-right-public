<template>
  <div class=background>
  </div>
</template>

<script>
export default {
  name: 'ar-background',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .background {
    position: fixed;
    z-index: -1;
    height: 140%;
    width: 100%;
    background-image: url('../assets/images/pulson0325.jpg');
    background-size: 100%;
  }
</style>
