<template>
  <div class="component">
    <div class="card-header d-flex">
      <router-link :to="{name: 'Profile', params: {id: creator.id}}">
        <img :src="creator.picture" :alt="creator.name" :title="creator.name">
      </router-link>
      <p><b>{{creator.name}}</b></p>
    </div>
  </div>
</template>


<script>
import { Account } from "../models/Account.js";

export default {
  props: {
    creator: { type: Account, required: true }
  },
  setup(props) {
    return {}
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
  border-radius: 50%;
}
</style>