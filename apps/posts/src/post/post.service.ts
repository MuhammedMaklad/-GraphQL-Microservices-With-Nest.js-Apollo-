import { Injectable, Logger } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostRepository } from './repository/post.repository';

@Injectable()
export class PostService {
  private readonly logger = new Logger(PostService.name);

  constructor(private readonly postRepository: PostRepository) { }

  async create(createPostInput: CreatePostInput) {
    const post = await this.postRepository.create(createPostInput);
    return post;
  }

  async findAll() {
    return await this.postRepository.find({});
  }

  async findOne(id: string) {
    const post = await this.postRepository.findOne({ _id: id });
    return post;
  }

  async findWithUser(id: string) {
    const post = await this.postRepository.getWithUser(id);
    return post;
  }

  async update(id: string, updatePostInput: UpdatePostInput) {
    return await this.postRepository.upsert({ _id: id }, updatePostInput);
  }

}
