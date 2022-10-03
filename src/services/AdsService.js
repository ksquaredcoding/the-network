import { AppState } from "../AppState.js"
import { Ad } from "../models/Ad.js"
import { sandboxServer } from "./AxiosService.js"

class AdsService {
  async getAds() {
    const res = await sandboxServer.get('api/ads')
    AppState.ads = res.data.map(a => new Ad(a))
  }
}

export const adsService = new AdsService()