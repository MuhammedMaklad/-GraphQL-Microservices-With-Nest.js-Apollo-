import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from 'apps/posts/src/post/entities/post.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  _id: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field(() => [Post], { nullable: true })
  posts: Post[];
}

@ObjectType()
export class PostAuthor {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;
}
