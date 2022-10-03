<template>
  <div class="col-xl-3 col-md-4 d-none d-md-block bg-dark text-light sidebar">
    <div class="mt-5 ms-4">
      <Login />
    </div>
    <div class="mt-4 ms-4">
      <router-link :to="{
      name: 'Home' }">
        <button class="btn">
          <span class="text-success lighten-30 selectable text-uppercase">
            Return Home
          </span>
        </button>
      </router-link>
    </div>
    <div class="mt-4 ms-4">
      <button class="btn" data-bs-target="#postsCanvas" data-bs-toggle="offcanvas" v-if="account.id">
        <span class="text-success lighten-30 selectable text-uppercase">
          Create Post
        </span>
      </button>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import Login from "./Login.vue";
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { Login }
}
</script>


<style lang="scss" scoped>
.sidebar {
  height: 100vh;
}
</style>