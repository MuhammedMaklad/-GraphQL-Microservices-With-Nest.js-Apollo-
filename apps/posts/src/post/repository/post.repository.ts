import { AbstractRepository } from "@app/database";
import { Injectable, Logger } from "@nestjs/common";
import { Post } from "../schema/post.schema";
import { Connection, Model } from "mongoose";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";


@Injectable()
export class PostRepository extends AbstractRepository<Post> {
  protected logger: Logger = new Logger(PostRepository.name);

  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
    @InjectConnection() connection: Connection
  ) {
    super(postModel, connection);
  }

  async getWithUser(id: string) {
    const post = await this.postModel.findOne<
      {
        _id: string,
        body: string,
        authorId: {
          email: string;
        }
      }>({ _id: id })
      .populate('authorId', 'email')
      .lean()
      .exec();

    if (!post) {
      this.logger.warn(`Post with ID ${id} not found.`);
      return null; // Or throw a NotFoundException if preferred
    }

    return post
  }
}