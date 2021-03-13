import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop({ minlength: 3 })
  username: string;

  @Prop({ maxlength: 30 })
  fullName: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
