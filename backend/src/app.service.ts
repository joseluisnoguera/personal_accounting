import { Account } from './models/Account.d'
import { Injectable } from '@nestjs/common'
import { accounts } from './mocks/accounts'

@Injectable()
export class AppService {
  getAccount(i: number): Account {
    return accounts[i]
  }

  googleLogin(req: { user: any }) {
    if (!req.user) {
      return 'No user from google'
    }

    return {
      message: 'User information from google',
      user: req.user,
    }
  }
}
