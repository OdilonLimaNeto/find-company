import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Account } from '@/database/entities/account.entity';
import { FindAccountService as IFindAccountService } from '@/interfaces/account/find-account.interface';
import { FindAccountService } from '@/services/account/find-account.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Account)
export class FindAccountResolver {
  constructor(
    @Inject(FindAccountService) private findAccountService: IFindAccountService,
  ) { }
  @Query(() => Account, { nullable: true })
  async account(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Account | undefined> {
    return this.findAccountService.findById(id);
  }
}
