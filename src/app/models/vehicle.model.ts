import { VehicleData } from './vehicle-data.model';

/**
 * Represents a vehicle in the fleet.
 */
export class Vehicle {
  uid: Number;
  mrLat: Number;
  mrLong: Number;
  mrSpeed: Number;
  mrGas: Number;
  data: VehicleData[];
}
