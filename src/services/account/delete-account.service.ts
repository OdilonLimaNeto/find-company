import { Injectable } from '@nestjs/common';
import { AccountRepository } from '@/repositories/account.repository';

@Injectable()
export class DeleteAccountService {
  constructor(private accountRepository: AccountRepository) { }
  async delete(id: string): Promise<true> {
    const account = await this.accountRepository.findOneOrFail(id);
    await this.accountRepository.remove(account);
    return true;
  }
}
