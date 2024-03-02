<template>
  <div class="container">
    <section class="row">
      <div class="col-md-12">
        <h1>Posts</h1>
      </div>
      <div v-for="post in posts" :key="post.id" class="col-12">
        <div class="bg-white rounded shadow my-2 border border-primary border-2 p-2">
          <div class="d-flex justify-content-start">
            <img class="post-card-creator-picture" :src="post.creator.picture" :alt="post.creator.name">
            <div class="d-flex flex-column align-center text-center">
              <p class="mb-0 ms-2 small bold"> {{ post.creator.name }} <i class="mdi mdi-account-school"></i> </p>
              <p class="mb-0 ms-2 small">{{ post.createdAt.toLocaleDateString() + ' ' + post.createdAt.toLocaleTimeString() }} </p>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <p>{{ post.body }}</p>
              i
            </div>
            <div>
              <img src="" alt="">
            </div>
          </div>
        </div>
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
