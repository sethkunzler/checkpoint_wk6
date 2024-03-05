<template>
  <div class="bg-light shadow my-2 p-2">
    <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId }}">
      <div class="d-flex text-dark justify-content-start user-select-none">
        <img class="post-card-creator-picture border border-subtle border-info" :src="post.creator.picture" :alt="post.creator.name">
        <div class="d-flex flex-column align-center text-center">
          <p class="mb-0 ms-2 small bold"> 
            {{ post.creator.name }} 
            <span v-if="post.creator.graduated" class="mdi mdi-account-school"></span>
          </p>
          <p class="mb-0 ms-2 small">{{ post.createdAt.toLocaleDateString() + ' ' + post.createdAt.toLocaleTimeString() }} </p>
        </div>
      </div>
    </router-link>
    <div>
      <p>{{ post.body }}</p>
    </div>
      <img v-if="post.imgUrl" class="post-img rounded me-3 user-select-none"
      :src="post.imgUrl" 
      :alt="'image from ' + post.creator.name" 
      :title="'image from ' + post.creator.name">
    <div class="text-end align-items-center">
      <!-- TODO can like and unlike a post -->
      <!-- TODO can see who has liked a post -->
      <span class="mdi mdi-heart network-teal fs-2" :title="post.likes.name"></span>
      <!-- <span class="mdi mdi-heart-outline network-teal fs-2"></span> -->
      <span class="fs-3 user-select-none">{{ post.likeIds.length }}</span>
    </div>
  </div>  
</template>


<script>
import { computed } from "vue";
import { Post } from "../models/Post.js";
import { AppState } from "../AppState.js";

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