import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field({ description: "email" })
  email: string;

  @Field({ description: "password" })
  password: string;
}
