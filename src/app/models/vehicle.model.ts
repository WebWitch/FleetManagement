import { VehicleData } from './vehicle-data.model';

/**
 * Represents a vehicle in the fleet.
 */
export class Vehicle {
  vid: number;
  uid: string;
  data: VehicleData[];
}
