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
  async getPostsBySearch(term) {
    const res = await postsServer.get('', {
      params: {
        query: term
      }
    })
    AppState.posts = res.data.posts.map(p => new Post(p))
  }
  async deletePost(id) {
    await postsServer.delete(`${id}`)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
  async createPost(data) {
    const res = await postsServer.post('', data)
    const post = new Post(res.data)
    AppState.posts = [post, ...AppState.posts]
  }
}

export const postsService = new PostsService()