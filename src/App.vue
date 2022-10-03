<template>
  <header>
    <img :src="ads[1]?.banner" :alt="ads[1]?.title" class="ad-style">
  </header>
  <main class="container-fluid">
    <div class="row">
      <SideBar />
      <div class="col-md-8 main-content">
        <router-view />
      </div>
    </div>
  </main>
  <footer>
    <img :src="ads[0]?.banner" :alt="ads[0]?.title" class="ad-style">
  </footer>
  <CreatePostForm />
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import SideBar from "./components/SideBar.vue"
import CreatePostForm from "./components/CreatePostForm.vue"
import Pop from "./utils/Pop.js";
import { adsService } from "./services/AdsService.js"

export default {
  setup() {
    async function getAds() {
      try {
        await adsService.getAds()
      } catch (error) {
        console.error("[GETTING ADS]", error);
        Pop.error(error.message);
      }
    }
    onMounted(() => {
      getAds()
    })
    return {
      appState: computed(() => AppState),
      ads: computed(() => AppState.ads)
    }
  },
  components: { Navbar, SideBar, CreatePostForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.main-content {
  height: 100vh;
  overflow-y: auto;
}

.ad-style {
  width: 100vw;
  height: 15vh;
  object-fit: cover;
  object-position: center;
}
</style>
