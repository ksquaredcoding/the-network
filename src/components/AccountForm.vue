<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" v-model="editable.name" placeholder="name" required class="form-control">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" v-model="editable.email" placeholder="email" required class="form-control">
    </div>
    <div class="form-group">
      <label for="picture">Picture:</label>
      <input type="url" v-model="editable.picture" class="form-control" placeholder="Picture to represent you!">
    </div>
    <div class="form-group">
      <label for="coverImg">coverImg:</label>
      <input type="url" v-model="editable.coverImg" class="form-control" placeholder="Sick background image!">
    </div>
    <div class="form-group">
      <label for="class">Class:</label>
      <input type="text" v-model="editable.class" placeholder="class" class="form-control">
    </div>
    <div class="form-group">
      <label for="linkedin">LinkedIn:</label>
      <input type="url" v-model="editable.linkedin" placeholder="linkedin" class="form-control">
    </div>
    <div class="form-group">
      <label for="github">GitHub:</label>
      <input type="url" v-model="editable.github" placeholder="github" class="form-control">
    </div>
    <div class="form-group">
      <label for="graduated">Graduated:</label>
      <input type="checkbox" v-model="editable.graduated" class="form-check-input mx-1"
        :value="account.graduated ? 'checked' : ''">
    </div>
    <div class="form-group">
      <label for="bio">Bio:</label>
      <textarea v-model="editable.bio" placeholder="Share a fun fact with the class" class="form-control"
        rows="4"></textarea>
    </div>
    <div class="my-3">
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>
  </form>
</template>


<script>
import { ref, watchEffect } from "vue";
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { accountService } from "../services/AccountService.js";
import { computed } from "@vue/reactivity";
export default {
  setup() {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...AppState.account }
    })
    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value)
        } catch (error) {
          console.error('[EDIT ACCOUNT]', error)
          Pop.error(error.message)
        }
      },
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>