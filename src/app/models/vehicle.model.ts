import { VehicleData } from './vehicle-data.model';

/**
 * Represents a vehicle in the fleet.
 */
export class Vehicle {
  id: string;
  managers: string[];
  gas_capacity: number;
  data: VehicleData[];
}
