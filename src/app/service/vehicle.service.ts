import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoggerService } from './logger.service';
import { HttpUtilsService } from './http-utils.service';
import { Manager } from '../models/manager.model';
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
   * @param manager The initial manager controlling the vehicle.
   * @param gas_capacity The capacity of the vehicle's gas tank in gallons.
   */
  addVehicle(manager: Manager, gas_capacity: number) {
    const id = this.db.createId();
    return this.db.collection('vehicles').add({
      id,
      managers: [manager.id],
      gas_capacity
    });
  }

  /**
   * Get all vehicles associated with a manager.
   * @param manager The manager to get the vehicles associated with.
   */
  getAll(manager: Manager): Observable<Vehicle[]> {
    if (!manager) {
      return this.db.collection<Vehicle>('vehicles').valueChanges().pipe(
        tap(_ => this.logger.log(`VehicleService: getAll()`)),
        catchError(this.util.handleError(`getAll`, []))
      );
    }

    return this.db.collection<Vehicle>('vehicles', ref => ref
        .where('manager', 'array-contains', manager.id)
      ).valueChanges().pipe(
        tap(_ => this.logger.log(`VehicleService: getAll(${manager.username})`)),
        catchError(this.util.handleError('getAll', []))
      );
  }

  get(id: string): Observable<Vehicle|{}> {
    return this.db.collection<Vehicle>('vehicles').doc(id)
      .valueChanges().pipe(
        tap(_ => this.logger.log(`VehicleService: get('${id}')`)),
        catchError(this.util.handleError('get'))
      );
  }

  update(vehicle: Vehicle) {
    return this.db.collection<Vehicle>('vehicles')
      .doc(vehicle.id)
      .set(vehicle);
  }
}
