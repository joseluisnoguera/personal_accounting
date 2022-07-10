import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { Account } from './models/Account.d'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    /** Intentionally empty */
  }

  @Get('/google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }

  @Get('/account')
  getAccounts(): Account {
    return this.appService.getAccount(0)
  }

  @Get('/secure/account')
  @UseGuards(AuthGuard('google'))
  getAccountsSecure(): Account {
    return this.appService.getAccount(1)
  }
}
