import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
  @Prop({ minlength: 7, maxlength: 7 })
  plateNumber: string;

  @Prop()
  typeVehicle: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
