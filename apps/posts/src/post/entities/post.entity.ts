import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'apps/users/src/users/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  body: string;

  @Field(() => User, { nullable: true })
  authorId: User;
}
