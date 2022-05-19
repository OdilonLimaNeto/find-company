import { Account } from './account.interface';

export type CreateAccountInput = Omit<Account, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export interface CreateAccountService {
  create(input: CreateAccountInput): Promise<Account>;
}
