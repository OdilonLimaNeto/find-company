import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { Account } from '@/database/entities/account.entity';
import { DeleteAccountService as IDeleteAccountService } from '@/interfaces/account/delete-account.interface';
import { DeleteAccountService } from '@/services/account/delete-account.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@Resolver(() => Account)
@UseGuards(GqlAuthGuard)
export class DeleteAccountResolver {
  constructor(
    @Inject(DeleteAccountService) private deleteAccountService: IDeleteAccountService,
  ) { }
  @Mutation(() => Boolean)
  async deleteAccount(@Args('id', { type: () => ID }) id: string): Promise<true> {
    return this.deleteAccountService.delete(id);
  }
}
