import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './schema/post.schema';
import { User, UserSchema } from 'apps/users/src/users/schema/user.schema';
import { PostRepository } from './repository/post.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema
      },
      {
        name: User.name,
        schema: UserSchema
      }
    ])
  ],
  providers: [PostResolver, PostService, PostRepository],
})
export class PostModule { }
