<template>
  <div class="info-display container bg-light text-dark shadow">
    <section class="row">
      <div class="col-md-12">
        <h1>THIS IS THE PROFILE PAGE</h1>
        <!-- <img src="" alt=""> -->
      </div>
      <!-- TODO Profile info -->

      <div v-for="post in posts" :key="post.id" class="col-md-12"> 
        <PostCard :post="post" />
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import PostCard from "../components/PostCard.vue";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    async function getPostsByCreatorId() {
      try {
        const profileId = route.params.profileId;
        await postsService.getPostsByCreatorId(profileId)
        logger.log(AppState.posts)
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      getPostsByCreatorId()
    })
    return {
      posts: computed(() => AppState.posts)
    };
  },
  components: { PostCard }
}
</script>


<style lang="scss" scoped>
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