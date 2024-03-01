import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async getPosts() {
    const response = await api.get('api/posts')
    logger.log('posts api response: ', response.data)
  }
}

export const postsService = new PostsService