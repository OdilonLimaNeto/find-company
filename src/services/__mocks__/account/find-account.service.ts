import { Account } from '@/database/entities/__mocks__/account.entity';
export class FindAccountService {
  findById = jest.fn(() => Account);
}
