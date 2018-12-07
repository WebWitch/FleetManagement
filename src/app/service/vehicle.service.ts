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

  addVehicle(manager: Manager, vehicle: Vehicle) {
    const id = this.db.createId();
    return this.db.collection('vehicles').add({
      id,
      ...vehicle
    });
  }

  getAll(manager: Manager): Observable<Vehicle[]> {
    return this.db.collection<Vehicle>('vehicles', ref => ref
        .where('manager', 'array-contains', manager.id)
      ).valueChanges().pipe(
        tap(_ => this.logger.log(`VehicleService: getAll()`)),
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
