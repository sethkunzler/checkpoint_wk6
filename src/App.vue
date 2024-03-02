<template>
  <header class="sticky-top">
    <Navbar />
  </header>
  <main class="d-flex justify-content-end width25">
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

.post-card-creator-picture {
  height: 8vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.bold {
  font-weight: bold;
}

</style>
