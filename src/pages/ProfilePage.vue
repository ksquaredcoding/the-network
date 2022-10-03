<template>
  <div v-if="profile">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 my-3">
          <ProfileDetail :profile="profile" />
        </div>
      </div>
      <PageButtons />
      <div class="row justify-content-center">
        <PostCard v-for="p in posts" :post="p" />
      </div>
      <PageButtons />
    </div>
  </div>
  <div v-else>
    <h2>Loading...</h2>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { postsService } from "../services/PostsService.js";
import { profilesService } from '../services/ProfilesService.js';
import Pop from '../utils/Pop.js';
import ProfileDetail from "../components/ProfileDetail.vue";
import PostCard from "../components/PostCard.vue";
import PageButtons from "../components/PageButtons.vue";
import SearchForm from "../components/SearchForm.vue";

export default {
  setup() {
    const route = useRoute();
    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.id);
      }
      catch (error) {
        console.error("[GETTING PROFILE]", error);
        Pop.error(error.message);
      }
    }
    async function getPostsByProfile() {
      try {
        await postsService.getPostsByProfile(route.params.id);
      }
      catch (error) {
        console.error("[GETTING POSTS BY PROFILE]", error);
        Pop.error(error.message);
      }
    }
    onMounted(() => {
      getProfileById();
      getPostsByProfile();
    });
    return {
      posts: computed(() => AppState.posts),
      profile: computed(() => AppState.activeProfile)
    };
  },
  components: { ProfileDetail, PostCard, PageButtons, SearchForm }
}
</script>


<style lang="scss" scoped>

</style>