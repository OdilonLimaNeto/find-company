export interface DeleteAccountService {
  delete(id: string): Promise<true>;
}
