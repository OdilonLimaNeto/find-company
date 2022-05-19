import { Account } from '@/database/entities/account.entity';
import { AccountRepository } from '@/repositories/account.repository';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthResolver from '../resolvers/auth/auth.resolver';
import AuthService from '../services/auth/auth.service';
import { JwtStrategy } from '../shared/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'test',
      signOptions: { expiresIn: '30d' },
    }),
    TypeOrmModule.forFeature([Account, AccountRepository]),
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy
  ],
})
export default class AuthModule {}
