import { AbstractDocument } from "@app/database";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from 'mongoose';

@Schema()
export class User extends AbstractDocument {

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: "Post" }] })
  posts?: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);