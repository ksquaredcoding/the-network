import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { sandboxServer, postsServer } from "./AxiosService.js"

class PostsService {
  async getPosts(pageUrl = '') {
    const res = await postsServer.get(pageUrl)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }
  async changeLike(id) {
    await postsServer.post(`/${id}/like`)
    const changedPost = await this.getPostById(id)
    const postIndex = AppState.posts.findIndex(p => p.id == id)
    AppState.posts.splice(postIndex, 1, changedPost)
  }
  async getPostById(id) {
    const res = await postsServer.get(`${id}`)
    const post = new Post(res.data)
    return post
  }
}

export const postsService = new PostsService()