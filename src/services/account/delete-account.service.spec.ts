import { Test } from '@nestjs/testing';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { AccountRepository } from '@/repositories/account.repository';
import { DeleteAccountService } from '@/services/account/delete-account.service';

jest.mock('@/repositories/account.repository');
describe('DeleteAccountService', () => {
  type SutTypes = { sut: DeleteAccountService; repository: AccountRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AccountRepository, DeleteAccountService],
    }).compile();
    const service = moduleRef.get<DeleteAccountService>(DeleteAccountService);
    const repository = moduleRef.get<AccountRepository>(AccountRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should remove a Account', async () => {
    const { sut, repository } = await makeSut();
    await sut.delete(Account.id);
    expect(repository.remove).toHaveBeenCalledWith(Account);
  });
});
