import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { UpdateAccountInput } from '@/inputs/account/update-account.input';
import { AccountRepository } from '@/repositories/account.repository';
import { UpdateAccountService } from './update-account.service';

jest.mock('@/repositories/account.repository');
describe('UpdateAccountService', () => {
  type SutTypes = { sut: UpdateAccountService; repository: AccountRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AccountRepository, UpdateAccountService],
    }).compile();
    const repository = moduleRef.get<AccountRepository>(AccountRepository);
    const service = moduleRef.get<UpdateAccountService>(UpdateAccountService);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should update a Account', async () => {
    const { sut, repository } = await makeSut();
    const input: UpdateAccountInput = {
      name: faker.random.words(),
      password: faker.internet.password()
    };
    expect(await sut.update(Account.id, input)).toBe(Account);
    expect(repository.save).toHaveBeenCalledWith(Object.assign(Account, input));
  });
});
