<template>
  .<div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <AccountForm />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountForm from "../components/AccountForm.vue";
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { AccountForm }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
