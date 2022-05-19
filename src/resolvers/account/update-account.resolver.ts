import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { Account } from '@/database/entities/account.entity';
import { UpdateAccountInput } from '@/inputs/account/update-account.input';
import { UpdateAccountService as IUpdateAccountService } from '@/interfaces/account/update-account.interface';
import { UpdateAccountService } from '@/services/account/update-account.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Account)
export class UpdateAccountResolver {
  constructor(
    @Inject(UpdateAccountService) private updateAccountService: IUpdateAccountService,
  ) { }
  @Mutation(() => Account)
  async updateAccount(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateAccountInput,
  ): Promise<Account> {
    return this.updateAccountService.update(id, input);
  }
}
