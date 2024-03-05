<template>
  <div class="posts-display-window container bg-light text-dark shadow">
    <section class="row">
      <div class="col-md-12 user-select-none">
        <h1>Posts</h1>
        <!-- FIXME pagination! -->
        <!-- <div class="d-flex justify-content-between align-items-center">
          <RouterLink to="{query: {page: currentPage - 1}}" :class="{disabled: currentPage == 1}">
            <span class="mdi mdi-arrow-left fs-2 rounded-start px-5"></span>
          </RouterLink>
          <span>## out of ##</span>
          <RouterLink to="{query: {page: currentPage + 1}}" :class="{disabled: currentPage == totalPages}">
          <span class="mdi mdi-arrow-right fs-2 rounded-end px-5"></span>
          </RouterLink>
        </div> -->
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
import { computed, onMounted, watch } from "vue";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js"
import { AppState } from "../AppState.js"
import PostCard from "../components/PostCard.vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    const route = useRoute;
    const router = useRouter;
    onMounted(() => {
      // console.log('home page mounted');
      getPosts();
    });
    async function getPosts() {
      try {
        await postsService.getPosts();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    async function changePage(pageNumber){
      logger.log('trying to change page')
        try {
          await postsService.changePage(pageNumber)
          logger.log('current page number', AppState.currentPage)
        } catch (error) {
          Pop.error(error)
        }
      }
    
      // FIXME pagination "does not recognize 'query' - page is undefined"
    // watch(route, ()=>{
    //   logger.log('this is the route', route)
    //   const pageNumber = route.query.page
    //   logger.log('route changed!', pageNumber)
    //   if(!pageNumber){
    //     getPosts()
    //   } else {
    //     changePage(pageNumber)
    //   }
    //   },
    //   {immediate: true}
    // )


    return {
      posts: computed(() => AppState.posts),
      currentPage: computed(()=> AppState.currentPage),
      totalPages: computed(()=> AppState.totalPages),
      changePage
    };
  },
  components: { PostCard, RouterLink }
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
