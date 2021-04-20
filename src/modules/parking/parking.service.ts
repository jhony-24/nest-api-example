import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ControlVehicle,
  ControlVehicleDocument,
} from 'src/core/schemas/ControlVehicle.schema';
import { Vehicle, VehicleDocument } from 'src/core/schemas/Vehicle.schema';

@Injectable()
export class ParkingService {
  constructor(
    @InjectModel(Vehicle.name)
    private readonly vehicleModel: Model<VehicleDocument>,
    @InjectModel(ControlVehicle.name)
    private readonly controlVehicleModel: Model<ControlVehicleDocument>,
  ) {}

  async registerEntryTimeOfVehicle(vehicle: Vehicle) {
    const vehicleCreated = await this.vehicleModel.create({
      plateNumber: vehicle.plateNumber,
    });
    const entryTimeVehicleCreated = await this.controlVehicleModel.create({
      entryTime: new Date().toLocaleString(),
      vehicle: vehicleCreated._id,
    });
    return entryTimeVehicleCreated;
  }
}
