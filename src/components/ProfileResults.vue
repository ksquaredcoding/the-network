<template>
  <div class="component col-md-8">
    <div class="d-flex justify-content-evenly">
      <router-link :to="{name: 'Profile', params: {id: profile?.id}}">
        <img :src="profile?.picture" :alt="profile?.name" :title="profile?.name">
      </router-link>
      <h3>{{profile?.name}} <span v-if="profile?.graduated"><i class="mdi mdi-account-school selectable"></i></span>
      </h3>
    </div>
  </div>
</template>

<script>
import { Account } from "../models/Account.js";
export default {
  props: {
    profile: { type: Account, required: true }
  },
  setup(props) {
    return {
      profileLink: `#/profile/${props.profile?.id}`
    }
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