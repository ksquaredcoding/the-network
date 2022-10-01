<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <input type="text" class="form-control" required="true" minlength="1" placeholder="Search" name="search"
        v-model="editable.term">
      <label for="search" class="visually-hidden">Search</label>
      <button type="submit" class="btn btn-info "><i class="mdi mdi-magnify"></i></button>
    </div>
  </form>
</template>


<script>
import { Post } from "../models/Post.js";
import { ref } from 'vue';
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          await postsService.getPostsBySearch(editable.value.term)
        } catch (error) {
          console.error('[SEARCH FORM]', error)
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>