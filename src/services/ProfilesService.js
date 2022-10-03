import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { sandboxServer } from "./AxiosService.js"

class ProfilesService {
  async getProfileById(id) {
    const res = await sandboxServer.get(`api/profiles/${id}`)
    AppState.activeProfile = new Account(res.data)
  }
  resetSearchProfiles() {
    AppState.searchProfiles = []
  }
}

export const profilesService = new ProfilesService()