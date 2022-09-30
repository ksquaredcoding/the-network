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
    <div class="row justify-content-center">
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

export default {
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
    };
  },
  components: { PostCard, PageButtons, SearchForm }
}
</script>

<style scoped lang="scss">

</style>
