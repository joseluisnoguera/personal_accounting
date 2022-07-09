import { AccountDetails } from './models/Account.d'
import { Injectable } from '@nestjs/common'
import { accounts } from './mocks/accounts'

@Injectable()
export class AppService {
  getAccounts(): AccountDetails[] {
    return accounts
  }
}
