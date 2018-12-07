/**
 * Represents a single log from a vehicle at a fixed point in time.
 */
export class VehicleData {
  timestamp: Date;
  speed: number;
  gas_remaining: number;
  rpm: number;
  location: firebase.firestore.GeoPoint;
  longitude: number;
  latitude: number;
}
