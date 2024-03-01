import { AppState } from "../AppState.js"
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
}

export const postsService = new PostsService