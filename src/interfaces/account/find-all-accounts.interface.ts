import { Account } from './account.interface';

export interface FindAllAccountsService {
  find(account: string): Promise<Account[]>;
}
