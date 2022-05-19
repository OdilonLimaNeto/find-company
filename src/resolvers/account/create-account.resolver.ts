import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Account } from '@/database/entities/account.entity';
import { CreateAccountInput } from '@/inputs/account/create-account.input';
import { CreateAccountService as ICreateAccountService } from '@/interfaces/account/create-account.interface';
import { CreateAccountService } from '@/services/account/create-account.service';

@Resolver(() => Account)
export class CreateAccountResolver {
  constructor(
    @Inject(CreateAccountService) private createAccountService: ICreateAccountService,
  ) { }

  @Mutation(() => Account)
  async createAccount(@Args('input') input: CreateAccountInput): Promise<Account> {
    return this.createAccountService.create(input);
  }
}
