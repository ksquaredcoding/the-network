<template>
  <h1>This page... <span class="on-hover">is about this dog!!!!!</span>
  </h1>
  <div class="hiddenDog on-hover"></div>
</template>


<script>
export default {
  setup() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
.hiddenDog {
  background-image: url('../assets/img/undraw_Dog_re_is6r.png');
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>