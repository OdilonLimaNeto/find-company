import { Injectable } from '@nestjs/common';
import { Account } from '@/database/entities/account.entity';
import { CreateAccountInput } from '@/inputs/account/create-account.input';
import { AccountRepository } from '@/repositories/account.repository';

@Injectable()
export class CreateAccountService {
  constructor(private accountRepository: AccountRepository) { }
  async create(input: CreateAccountInput): Promise<Account> {
    return this.accountRepository.save(input);
  }
}
