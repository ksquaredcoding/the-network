<template>
  <div class="container-fluid">
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
      posts: computed(() => AppState.posts)
    };
  },
  components: { PostCard }
}
</script>

<style scoped lang="scss">

</style>
