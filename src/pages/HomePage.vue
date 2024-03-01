<template>
  <div class="container">
    <section class="row">
      <div class="col-md-12">
        <h1>Posts</h1>
      </div>
      <div v-for="post in posts" :key="post.id" class="col-12">
        {{ post }}
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js"
import { AppState } from "../AppState.js"

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
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss"></style>
