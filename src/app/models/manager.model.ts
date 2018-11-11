import { Vehicle } from './vehicle.model';

/**
 * Represents a manager for the fleet.
 */
export class Manager {
  username: string;
  password: string;
  name: string;
  vehicles: Vehicle[];
}
