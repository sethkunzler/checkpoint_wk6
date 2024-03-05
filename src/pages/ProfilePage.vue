<template>
  <div class="info-display container bg-light text-dark shadow">
    <section class="row">
      <div v-if="profile" class="col-md-12">
        <img class="profile-cover-img" :src="profile.coverImg" alt="">
        <div class="shadow p-2 d-flex flex-column align-items-center">
          <img class="profile-img border border-2 border-info text-center" :src="profile.picture" :alt="profile.name">
          <h1>{{ profile.name }}</h1>
          <div class="p-2">
            <div>
              <h3>
                Class of {{ profile.class }} 
                <span v-if="profile.graduated" class="mdi mdi-account-school"></span>
              </h3>
            </div>
            <h5 class="italics">~ About {{ profile.name }}:</h5>
            <h6 class="fs-5">{{ profile.bio }}</h6>
          </div>

          <div>
            <a class="btn network-teal btn-outline" :href="profile.github" target="_blank">
              <span class="mdi mdi-github fs-1" alt="github link" title="github link"></span>
            </a>
            <a class="btn btn-outline-dark bg-network-gradient italics" :href="profile.linkedin" target="_blank">
              <span alt="linkedin link" title="linkedin link">in</span>
            </a>
            <a class="btn network-teal btn-outline" :href="profile.resume" target="_blank">
              <span class="mdi mdi-file-certificate fs-1" alt="resume link" title="resume link"></span>
            </a>
          </div>
        </div>
      </div>
      <!-- TODO Profile info -->
      <h2 v-if="profile" class="pt-3"> {{ profile.name }}'s Posts:</h2>
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
        // logger.log('profile page got this back from the AppState after running getPostsByCreatorId', AppState.posts)
      } catch (error) {
        Pop.error(error)
      }
    }
    async function setActiveProfile() {
      logger.log('setActiveProfile was called')
      try {
        const profileId = route.params.profileId;
        await postsService.setActiveAccount(profileId)
        logger.log('profile page got this back from the AppState after running setActiveProfile', AppState.activeAccount)
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      getPostsByCreatorId();
      setActiveProfile();
    })
    return {
      posts: computed(() => AppState.posts),
      profile: computed(() => AppState.activeAccount),
      user: computed(() => AppState.account)
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
  height: 20dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  transform: translateY(-12vh);
  margin-bottom: -12vh;
}

@media screen AND (min-width: 786px) {
  .info-display{
    width: 75vw;
  }
}
</style>