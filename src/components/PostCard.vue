<template>
  <div class="col-md-6 my-2">
    <div class="card">
      <PostCreator :creator="post.creator" />
      <div class="card-body">
        <img :src="post.imgUrl"
          alt="https://uploads-us-west-2.insided.com/looker-en/attachment/d0a25f59-c9b7-40bd-b98e-de785bbd04e7.png"
          v-if="post.imgUrl" class="img-fit">
        <p>{{post.body}}</p>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <i class="mdi mdi-cards-heart text-success fs-3 selectable" @click="changeLike(post.id)" v-if="liked"></i>
        <i class="mdi mdi-cards-heart-outline text-success fs-3 selectable" @click="changeLike(post.id)" v-else></i>
      </div>
    </div>
  </div>
</template>


<script>
import { Post } from "../models/Post.js";
import PostCreator from "./PostCreator.vue";
import { Account } from "../models/Account.js";
import { computed } from "vue";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";

export default {
  props: {
    post: {
      type: Post,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async changeLike(id) {
        try {
          await postsService.changeLike(id)
        } catch (error) {
          console.error('[(UN)LIKE POST]', error)
          Pop.error(error.message)
        }
      },
      liked: computed(() => {
        if (props.post.likeIds.includes(AppState.account.id)) {
          return true
        } else { return false }
      })
    };
  },
  components: { PostCreator }
}
</script>


<style lang="scss" scoped>
.img-fit {
  height: 30rem;
  width: 30rem;
  object-fit: cover;
}
</style>