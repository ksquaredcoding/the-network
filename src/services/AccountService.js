import { AppState } from '../AppState'
import { Account } from "../models/Account.js"
import { logger } from '../utils/Logger'
import { sandboxServer } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await sandboxServer.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async editAccount(data) {
    const res = await sandboxServer.put('/account', data)
    AppState.account = new Account(res.data)
  }
}

export const accountService = new AccountService()
