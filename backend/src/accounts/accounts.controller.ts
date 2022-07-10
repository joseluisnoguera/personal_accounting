import { Controller, Get, Param, Post } from '@nestjs/common'

import { AccountsService } from './accounts.service'

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {
    /** Intentionaly empty */
  }

  @Get()
  getAllAccounts() {
    return this.accountsService.getAllAccounts()
  }

  @Get(':id')
  getAccountById(@Param('id') id: string) {
    return this.accountsService.getAccountById(Number(id))
  }

  @Post()
  async createAccount(@Body() account: CreateAccountDto) {
    return this.accountsService.createAccount(account)
  }

  @Put(':id')
  async replaceAccount(
    @Param('id') id: string,
    @Body() account: UpdateAccountDto,
  ) {
    return this.accountsService.replaceAccount(Number(id), account)
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.accountsService.deleteAccount(Number(id))
  }
}
