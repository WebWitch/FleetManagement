import { VehicleData } from './vehicle-data.model';

/**
 * Represents a vehicle in the fleet.
 */
export class Vehicle {
  id: string;
  gas_capacity: number;
  most_recent_datapoint: VehicleData;
  data: VehicleData[];
}
