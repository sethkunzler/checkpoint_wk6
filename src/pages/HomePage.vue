<template>
  <div class="posts-display-window container bg-light text-dark">
    <section class="row">
      <div class="col-md-12 user-select-none">
        <h1>Posts</h1>
        <div class="d-flex justify-content-between align-items-center">
          <span class="mdi mdi-arrow-left fs-2 rounded-start selectable px-5"></span>
          <span>## out of ##</span>
          <span class="mdi mdi-arrow-right fs-2 rounded-end selectable px-5"></span>
        </div>
      </div>
      <div v-for="post in posts" :key="post.id" class="col-12">
        <PostCard :post="post" />
        <!-- STUB -->
        <!-- <div class="bg-light shadow my-2 p-2">
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
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js"
import { AppState } from "../AppState.js"
import PostCard from "../components/PostCard.vue";

export default {
    setup() {
        async function getPosts() {
            try {
                await postsService.getPosts();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            console.log('home page mounted');
            getPosts();
        });
        return {
          posts: computed(() => AppState.posts)
        };
    },
    components: { PostCard }
}
</script>

<style scoped lang="scss">
  .posts-display-window {
    width: 100vw;
  }

  @media screen AND (min-width: 786px) {
  .posts-display-window{
    width: 50vw;
  }
}
</style>
