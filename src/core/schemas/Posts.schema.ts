import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Account } from './Account.schema';

export type PostsDocument = Posts & Document;

@Schema()
export class Posts {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: Account;

  @Prop()
  backgroundImage: string;

  @Prop([String])
  tags: string[];

  @Prop()
  content: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
