import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import AuthModule from './modules/auth.module';
import graphqlConfig from './configs/graphql.config';
import { AccountModule } from './modules/account.module';

@Module({
  imports: [
    AuthModule,
    AccountModule,
    GraphQLModule.forRoot(graphqlConfig),
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}