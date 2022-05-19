import { Injectable } from '@nestjs/common';
import { Account } from '@/database/entities/account.entity';
import { AccountRepository } from '@/repositories/account.repository';

@Injectable()
export class FindAllAccountsService {
  constructor(private accountRepository: AccountRepository) { }
  async find(account: Account['id']): Promise<Account[]> {
    return this.accountRepository.find({ id: account });
  }
}
