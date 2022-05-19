import { Test } from '@nestjs/testing';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { AccountRepository } from '@/repositories/account.repository';
import { FindAccountService } from './find-account.service';

jest.mock('@/repositories/account.repository');
describe('FindAccountService', () => {
  type SutTypes = { sut: FindAccountService; repository: AccountRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AccountRepository, FindAccountService],
    }).compile();
    const service = moduleRef.get<FindAccountService>(FindAccountService);
    const repository = moduleRef.get<AccountRepository>(AccountRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find a Account by id', async () => {
    const { sut, repository } = await makeSut();
    expect(await sut.findById(Account.id)).toBe(Account);
    expect(repository.findOne).toHaveBeenCalledWith(Account.id);
  });
});
