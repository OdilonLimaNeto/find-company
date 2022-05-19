import { AccountRepository } from '@/repositories/account.repository';
import { CreateAccountResolver } from '@/resolvers/account/create-account.resolver';
import { FindAllAccountsResolver } from '@/resolvers/account/find-all-account.resolver';
import { FindAccountResolver } from '@/resolvers/account/find-account.resolver';
import { UpdateAccountResolver } from '@/resolvers/account/update-account.resolver';
import { CreateAccountService } from '@/services/account/create-account.service';
import { DeleteAccountService } from '@/services/account/delete-account.service';
import { FindAllAccountsService } from '@/services/account/find-all-account.service';
import { FindAccountService } from '@/services/account/find-account.service';
import { UpdateAccountService } from '@/services/account/update-account.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AccountRepository, AccountRepository])],
  providers: [
    CreateAccountService,
    CreateAccountResolver,
    FindAllAccountsService,
    FindAllAccountsResolver,
    FindAccountService,
    FindAccountResolver,
    DeleteAccountService,
    DeleteAccountService,
    UpdateAccountService,
    UpdateAccountResolver
  ],
})
export class AccountModule {}