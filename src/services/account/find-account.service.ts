import { Injectable } from '@nestjs/common';
import { Account } from '@/database/entities/account.entity';
import { AccountRepository } from '@/repositories/account.repository';

@Injectable()
export class FindAccountService {
  constructor(private accountRepository: AccountRepository) { }
  async findById(id: string): Promise<Account | undefined> {
    return this.accountRepository.findOne(id);
  }
}
