<template>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="postsCanvas"
    aria-labelledby="postsCanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="postsCanvasLabel">Create New Post</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="imgUrl">Image Url:</label>
          <input type="url" v-model="editable.imgUrl" class="form-control" placeholder="Images, portray your emotions!">
        </div>
        <div class="form-group">
          <label for="body">What do you want to say?</label>
          <textarea v-model="editable.body" placeholder="Type the pain away..." class="form-control" rows="4"
            required></textarea>
        </div>
        <div class="my-3">
          <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit Post</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { postsService } from "../services/PostsService.js";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          await postsService.createPost(editable.value)
          editable.value = ''
        } catch (error) {
          console.error('[CREATE POST]', error)
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>