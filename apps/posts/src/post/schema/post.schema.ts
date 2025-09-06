import { AbstractDocument } from "@app/database";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { User } from "apps/users/src/users/schema/user.schema";
import { Types } from "mongoose";


@Schema()
export class Post extends AbstractDocument {
  @Prop()
  body: string;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  authorId: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);