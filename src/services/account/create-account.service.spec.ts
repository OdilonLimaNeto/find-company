import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { AccountRepository } from '@/repositories/account.repository';
import { CreateAccountService } from './create-account.service';
import { CreateAccountInput } from '@/interfaces/account/create-account.interface';

jest.mock('@/repositories/account.repository');
describe('CreateAccountService', () => {
  type SutTypes = { sut: CreateAccountService; repository: AccountRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AccountRepository, CreateAccountService],
    }).compile();
    const service = moduleRef.get<CreateAccountService>(CreateAccountService);
    const repository = moduleRef.get<AccountRepository>(AccountRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should create a Account', async () => {
    const { sut, repository } = await makeSut();
    const accountCreateInput: CreateAccountInput = {
      name: faker.random.words(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    expect(await sut.create(accountCreateInput)).toBe(Account);
    expect(repository.save).toHaveBeenCalledWith(accountCreateInput);
  });
});
