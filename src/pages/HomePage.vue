<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-2 my-2">
        <button class="btn btn-danger" @click="changePage(previousPage)" :disabled="!previousPage"
          :class="{'disabled' : !previousPage}">Previous</button>
      </div>
      <div class="col-2 my-2">
        <button class="btn btn-success" @click="changePage(nextPage)" :disabled="!nextPage"
          :class="{'disabled' : !nextPage}">Next</button>
      </div>
    </div>
    <div class="row">
      <PostCard v-for="p in posts" :post="p" />
    </div>
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js"
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import PostCard from "../components/PostCard.vue";

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
      previousPage: computed(() => AppState.previousPage),
      nextPage: computed(() => AppState.nextPage),
      async changePage(pageUrl) {
        try {
          await postsService.getPosts(pageUrl)
        } catch (error) {
          console.error("[CHANGING PAGES]", error);
          Pop.error(error.message);
        }
      }
    };
  },
  components: { PostCard }
}
</script>

<style scoped lang="scss">

</style>
