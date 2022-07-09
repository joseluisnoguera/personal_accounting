import { AccountDetails } from './models/Account.d'
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getAccounts(): AccountDetails[] {
    return this.appService.getAccounts()
  }
}
