import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Vehicle } from './Vehicle.schema';

export type ControlVehicleDocument = Document;

@Schema()
export class ControlVehicle {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' })
  vehicle: Vehicle;

  @Prop()
  entryTime: string;

  @Prop()
  exitTime: string;
}

export const ControlVehicleSchema = SchemaFactory.createForClass(
  ControlVehicle,
);
