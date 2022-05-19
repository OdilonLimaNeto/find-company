import { Account } from './account.interface';

export type UpdateAccountInput = Partial<Pick<Account, 'name' | 'password'>>;

export interface UpdateAccountService {
  update(id: string, input: UpdateAccountInput): Promise<Account>;
}
