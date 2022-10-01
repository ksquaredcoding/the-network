<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-6 my-3">
        <div class="col-10">
          <SearchForm />
        </div>
      </div>
    </div>
    <PageButtons />
    <div class="row justify-content-center" v-if="results.length > 0">
      <h3>Profiles:</h3>
      <ProfileResults v-for="r in results" :profile="r" />
    </div>
    <div class="row justify-content-center">
      <h3 v-if="results.length > 0">Posts:</h3>
      <PostCard v-for="p in posts" :post="p" />
    </div>
    <PageButtons />
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js"
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import PostCard from "../components/PostCard.vue";
import PageButtons from "../components/PageButtons.vue";
import SearchForm from "../components/SearchForm.vue";
import ProfileResults from "../components/ProfileResults.vue";
import { Account } from "../models/Account.js";

export default {
  props: {
    result: { type: Account, required: true }
  },
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts();
      }
      catch (error) {
        console.error("[GETTING POSTS]", error);
        Pop.error(error.message);
      }
    }
    onMounted(() => {
      getPosts();
    });
    return {
      posts: computed(() => AppState.posts),
      results: computed(() => AppState.searchProfiles)
    };
  },
  components: { PostCard, PageButtons, SearchForm, ProfileResults }
}
</script>

<style scoped lang="scss">

</style>
