import { Account } from './account.interface';

export interface FindAccountService {
  findById(id: string): Promise<Account | null>;
}
