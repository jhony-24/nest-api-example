import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ControlVehicle,
  ControlVehicleSchema,
} from 'src/core/schemas/ControlVehicle.schema';
import { Vehicle, VehicleSchema } from 'src/core/schemas/Vehicle.schema';
import { ParkingController } from './parking.controller';
import { ParkingService } from './parking.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Vehicle.name,
        schema: VehicleSchema,
      },
      {
        name: ControlVehicle.name,
        schema: ControlVehicleSchema,
      },
    ]),
  ],
  controllers: [ParkingController],
  providers: [ParkingService],
})
export class ParkingModule {}
