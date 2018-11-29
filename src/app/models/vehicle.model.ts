import { VehicleData } from './vehicle-data.model';

/**
 * Represents a vehicle in the fleet.
 */
export class Vehicle {
  uid: Number;
  latitude: Number;
  longitude: Number;
  speed: Number;
  gas: Number;
  data: VehicleData[];
}
