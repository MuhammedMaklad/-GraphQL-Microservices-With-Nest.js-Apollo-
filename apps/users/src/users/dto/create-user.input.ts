import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'enter id' })
  id: string;

  @Field({ description: "email" })
  email: string;

  @Field({ description: "password" })
  password: string;
}
