import Axios from 'axios'
import { baseURL } from '../env'
export const sandboxServer = Axios.create({
  baseURL,
  timeout: 8000
})
