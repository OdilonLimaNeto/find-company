import { Account } from '@/database/entities/__mocks__/account.entity';
export class CreateAccountService {
  create = jest.fn(() => Account);
}
