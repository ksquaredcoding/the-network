<template>
  <div class="cover-img img-fluid text-shadow elevation-2" :style="{backgroundImage: `url(${profile?.coverImg})`}">
    <img :src="profile?.picture" :alt="profile?.name" class="profile-img">
    <div class="my-4">
      <h2 class="text-shadow">{{profile?.name}} <span v-if="profile?.graduated"><i
            class="mdi mdi-account-school"></i></span>
      </h2>
      <h3>
        <p class="text-shadow">Joined on: <b>{{new Date(profile?.createdAt).toLocaleDateString('en-us', {month: 'short',
        day: '2-digit',
        year: '2-digit'})}}</b></p>
        <p class="text-shadow" v-if="profile?.class">Class: <b>{{new
        Date(profile?.class).toLocaleDateString('en-us', {month:
        'short', day: '2-digit',
        year: '2-digit'})}}</b></p>
        <a v-if="profile?.github" :href="profile?.github" target="_blank">
          <i class="mdi mdi-github selectable text-white"></i>
        </a>
        <a v-if="profile?.linkedin" :href="profile?.linkedin" target="_blank">
          <i class="mdi mdi-linkedin selectable text-white"></i>
        </a>
        <a v-if="profile?.resume" :href="profile?.resume" target="_blank">
          <i class="bi bi-file-earmark-person-fill selectable text-white"></i>
        </a>
      </h3>
      <p class="mb-2 read-bgrd p-1 d-flex">{{profile?.bio}}</p>
    </div>
  </div>
</template>


<script>
import { Account } from "../models/Account.js";

export default {
  props: {
    profile: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.cover-img {
  width: 100vw;
  height: 55vh;
  padding: 3rem;
  background-position: center;
  background-size: cover;
}

.text-shadow {
  text-shadow: 3px 3px var(--my-dark),
    0px 0px 10px rgba(186, 169, 15, 0.845);
  color: rgb(255, 255, 255);
  font-weight: bold;
  letter-spacing: 0.08rem;
}

.profile-img {
  height: 15rem;
  width: 15rem;
  object-fit: cover;
  border-radius: 50%;
}

.read-bgrd {
  background-color: rgba(75, 73, 73, 0.723);
  border-radius: 5%;
  overflow-y: auto;
  max-height: 8vh;
}
</style>