import { Account } from '@/database/entities/account.entity';
import JWT from '@/database/entities/jtw.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Auth {
  @Field()
  account: Account;

  @Field()
  jwt: JWT;
}