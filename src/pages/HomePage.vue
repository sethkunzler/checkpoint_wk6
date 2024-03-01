<template>

</template>

<script>
import { onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js"

export default {
  setup() {
    async function getPosts() {
        try {
          await postsService.getPosts()
        } catch (error) {
          Pop.error(error)
        }
      }
    onMounted(() => {
      console.log('home page mounted');
      getPosts()
    })
    return {
      
    }
  }
}
</script>

<style scoped lang="scss"></style>
