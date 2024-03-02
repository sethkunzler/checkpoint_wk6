<template>
  <div class="info-display text-center bg-light text-dark">
    <img :src="account.coverImg" :alt="account.name + 'cover image'" class="profile-cover-img">
    <h1>Welcome {{ account.name }}</h1>
    <img class="profile-img rounded mx-auto" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
.info-display {
  width:100%;
}
.profile-cover-img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
.profile-img {
  max-width: 100px;
}

@media screen AND (min-width: 786px) {
  .info-display{
    width: 75vw;
  }
}
</style>
