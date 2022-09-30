<template>
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
</template>


<script>
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js"
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
export default {
  setup() {
    return {
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
    }
  }
}
</script>


<style lang="scss" scoped>

</style>