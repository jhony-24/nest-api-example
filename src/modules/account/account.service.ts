import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from 'src/core/schemas/Account.schema';
import ICreateNewAccount from './interfaces/ICreateNewAccount';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>,
  ) {}

  async createNewBasicAccount(
    newAccount: ICreateNewAccount,
  ): Promise<ICreateNewAccount> {
    const newAccountCreated = await this.accountModel.create(newAccount);
    return newAccountCreated;
  }
}
