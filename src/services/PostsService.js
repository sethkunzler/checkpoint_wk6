import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async getPosts() {
    const response = await api.get('api/posts')
    logger.log('posts api response: ', response.data)
    const newPosts = response.data.posts.map(pojo => new Post(pojo)) 
    AppState.posts = newPosts
    // logger.log('posts in the appState', AppState.posts)
  }

  async setActiveAccount(profileId) {
    AppState.activeAccount = null
    logger.log('active acount at start of getPostsbyCreator ID ', AppState.activeAccount)
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log('posts for profile', response.data)
    AppState.activeAccount = new Account(response.data)
    logger.log('Active account at the end of getPostsByCreatorId', AppState.activeAccount)
  }
  async getPostsByCreatorId(profileId) {
    AppState.posts = null
    const response = await api.get(`api/profiles/${profileId}/posts`)
    logger.log('posts for profile', response.data)
    const newPosts = response.data.posts.map(pojo => new Post(pojo))
    AppState.posts = newPosts
  }

}



export const postsService = new PostsService