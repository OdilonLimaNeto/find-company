import { Injectable } from '@nestjs/common';
import { Account } from '@/database/entities/account.entity';
import { UpdateAccountInput } from '@/inputs/account/update-account.input';
import { AccountRepository } from '@/repositories/account.repository';

@Injectable()
export class UpdateAccountService {
  constructor(private accountRepository: AccountRepository) { }
  async update(id: string, input: UpdateAccountInput): Promise<Account> {
    const account = await this.accountRepository.findOneOrFail(id);
    const accountUpdated = Object.assign(account, input);
    return this.accountRepository.save(accountUpdated);
  }
}
