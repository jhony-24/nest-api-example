import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import ICreateNewAccount from './interfaces/ICreateNewAccount';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/')
  async createNewBasicAccount(
    @Body() account: ICreateNewAccount,
  ): Promise<ICreateNewAccount> {
    return this.accountService.createNewBasicAccount(account);
  }
}
