import { Account } from '@/database/entities/account.entity';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class AuthInput {
  @Field(() => String)
  email: Account['email'];

  @Field(() => String)
  password: Account['password'];
}