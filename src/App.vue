<template>
  <header class="sticky-top">
    <Navbar />
  </header>
  <main class="d-flex justify-content-center width25 bg-backdrop">
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
  --network-teal: rgb(57,196,198);
  --backdrop-teal: #6dd5cd; 
  --light-teal: #8ADDD3;
}

.bg-backdrop {
  background-color: var(--light-teal);
}

.bg-network-gradient {
  background: rgb(57, 196, 198);
  background: linear-gradient(90deg, rgba(57,196,198,1) 0%, rgb(126, 218, 207) 100%);
  color: white;
}
.network-teal {
  color: rgb(57,196,198);
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

.italics {
  font-style: italic;
}

</style>
