import Axios from 'axios'
import { baseURL } from '../env'
export const sandboxServer = Axios.create({
  baseURL,
  timeout: 8000
})
export const postsServer = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/posts',
  timeout: 8000
})
