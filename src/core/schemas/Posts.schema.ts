import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Account } from './Account.schema';
import * as mongoose from 'mongoose';

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
