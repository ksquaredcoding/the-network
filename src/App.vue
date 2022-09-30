<template>
  <main class="container-fluid">
    <div class="row">
      <SideBar />
      <div class="col-md-8 main-content">
        <router-view />
      </div>
    </div>
  </main>
  <footer>
  </footer>
  <CreatePostForm />
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import SideBar from "./components/SideBar.vue"
import CreatePostForm from "./components/CreatePostForm.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, SideBar, CreatePostForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.main-content {
  height: 100vh;
}
</style>
