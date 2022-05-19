import { InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateAccountInput {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  password: string;
}
