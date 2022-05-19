import bcrypt from 'bcrypt'
import { Account } from '@/database/entities/account.entity';
import JWT from '@/database/entities/jtw.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInputError } from 'apollo-server-errors';
import { Repository } from 'typeorm';
import AuthInput from './typings/auth.input';
import Auth from './typings/auth.typings';

@Injectable()
export default class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Account)
    private repository: Repository<Account>,
  ) { }

  async validateUser({ email, password }: AuthInput): Promise<Auth> {
    const account = await this.repository.findOne({ email });
    const incorrectPassword = !bcrypt.compareSync(password, account.password);
    if (incorrectPassword) {
      throw new UserInputError('Invalid credentials');
    }
    const payload = { sub: account.id };  
    const jwt: JWT = {
      accessToken: this.jwtService.sign(payload),
      expiresIn: 3600,
    };
    return {account, jwt};
  }
}