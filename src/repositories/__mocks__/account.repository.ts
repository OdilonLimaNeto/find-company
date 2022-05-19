import { Account } from '@/database/entities/__mocks__/account.entity';

export class AccountRepository {
  find = jest.fn(() => [Account]);
  findOne = jest.fn(() => Account);
  findOneOrFail = jest.fn(() => Account);
  remove = jest.fn();
  save = jest.fn(() => Account);
}
