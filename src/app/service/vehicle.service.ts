import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoggerService } from './logger.service';
import { HttpUtilsService } from './http-utils.service';
import { Vehicle } from '../models/vehicle.model';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private db: AngularFirestore,
    private logger: LoggerService,
    private util: HttpUtilsService
  ) { }

  /**
   * Add a new vehicle.
   * @param gas_capacity The capacity of the vehicle's gas tank in gallons.
   */
  addVehicle(gas_capacity: number) {
    const id = this.db.createId();
    return this.db.collection('vehicles').add({
      id,
      gas_capacity
    });
  }

  /**
   * Get all vehicles.
   * @todo Bind this to the logged-in user.
   */
  getAll(): Observable<Vehicle[]> {
    return this.db.collection<Vehicle>('vehicles').valueChanges().pipe(
      tap(_ => this.logger.log(`VehicleService: getAll()`)),
      catchError(this.util.handleError(`getAll`, []))
    );
  }

  /**
   * Get a vehicle based on the document id.
   * @param id The vehicle's document id.
   */
  get(id: string): Observable<Vehicle|{}> {
    return this.db.collection<Vehicle>('vehicles').doc(id)
      .valueChanges().pipe(
        tap(_ => this.logger.log(`VehicleService: get('${id}')`)),
        catchError(this.util.handleError('get'))
      );
  }

  /**
   * Update a vehicle. It should include a document id for the update to succeed.
   * @param vehicle The fully-qualified vehicle to update, it will be replaced in the database.
   * @todo Find a better way to update. This seems sloppy.
   */
  update(vehicle: Vehicle) {
    return this.db.collection<Vehicle>('vehicles')
      .doc(vehicle.id)
      .set(vehicle);
  }
}
