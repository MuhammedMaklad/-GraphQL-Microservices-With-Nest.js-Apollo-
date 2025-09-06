import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Logger } from '@nestjs/common';

@Resolver(() => Post)
export class PostResolver {
  private readonly logger = new Logger(PostResolver.name);

  constructor(private readonly postService: PostService) { }

  @Mutation(() => Post)
  async createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return await this.postService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'post' })
  findAll() {
    return this.postService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return await this.postService.findOne(id);
  }

  @Query(() => Post, { name: 'postWithUser' })
  async findOnByUser(@Args('id', { type: () => String }) id: string) {
    const post = await this.postService.findWithUser(id);
    this.logger.log(`from resolver ${JSON.stringify(post)}`)
    return post;
  }
  @Mutation(() => Post)
  updatePost(
    @Args('id', { type: () => String }) id: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput
  ) {
    return this.postService.update(id, updatePostInput);
  }

}
