<template>
  <div class="bg-light shadow my-2 p-2">
    <div class="d-flex justify-content-start user-select-none">
      <img class="post-card-creator-picture border border-subtle border-info" :src="post.creator.picture" :alt="post.creator.name">
      <div class="d-flex flex-column align-center text-center">
        <p class="mb-0 ms-2 small bold"> {{ post.creator.name }} <i class="mdi mdi-account-school"></i> </p>
        <p class="mb-0 ms-2 small">{{ post.createdAt.toLocaleDateString() + ' ' + post.createdAt.toLocaleTimeString() }} </p>
      </div>
    </div>
    <div>
      <p>{{ post.body }}</p>
    </div>
      <img class="post-img rounded me-3 user-select-none" 
      :src="post.imgUrl" 
      :alt="'image from ' + post.creator.name" 
      :title="'image from ' + post.creator.name">
    <div class="text-end align-items-center">
      <span class="mdi mdi-heart network-teal fs-2"></span>
      <span class="mdi mdi-heart-outline network-teal fs-2"></span>
      <span class="fs-3 user-select-none">{{ post.likeIds.length }}</span>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { Post } from "../models/Post.js";

export default {
  props: {
    post: {type: Post, required: true}
  },
  setup(){
    return{
      posts: computed(() => AppState.posts)
    }
  }
}
</script>


<style lang="scss" scoped>
  .post-img {
    width: 100%;
    object-fit: cover;
  }

</style>