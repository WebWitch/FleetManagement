import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle.model';
import { VehicleData } from '../models/vehicle-data.model';
import { HttpUtilsService } from './http-utils.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private url = environment.url + '/vehicle';
  constructor(
    private logger: LoggerService,
    private http: HttpClient,
    private httpUtilsService: HttpUtilsService
  ) { }

  /**
   * GET vehicles from the server.
   */
  getAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.url)
      .pipe(
        tap(() => this.logger.log('VehicleService: getAll()')),
        catchError(this.httpUtilsService.handleError('getAll', []))
      );
  }

  /**
   * PUT a new vehicle to the server.
   * @param vehicle A vehicle to add.
   */
  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(this.url, vehicle, httpOptions)
      .pipe(
        tap(() => this.logger.log('ManagerService: addVehicle()', vehicle)),
        catchError(this.httpUtilsService.handleError<Vehicle>('addVehicle'))
      );
  }

  /**
   * GET a vehicle by uid
   * @param uid The uid of the vehicle to find.
   */
  getUid(uid: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.url + '/' + uid)
      .pipe(
        tap(vehicle => this.logger.log(`VehicleService: getUid('${uid}')`, vehicle)),
        catchError(this.httpUtilsService.handleError<Vehicle>('getUid', null))
      );
  }

  /**
   * PUT new vehicle data to the server.
   * @param vehicleData The data to append to the vehicle's data array.
   */
  updateVehicle(vehicle: Vehicle, vehicleData: VehicleData): Observable<Vehicle> {
    return this.http.put<Vehicle>(this.url + '/' + vehicle.uid, vehicleData, httpOptions)
      .pipe(
        tap(() => this.logger.log(`VehicleService: updateVehicle(${vehicle.uid}, data)`, vehicleData, vehicle)),
        catchError(this.httpUtilsService.handleError<Vehicle>('updateVehicle'))
      );
  }

  /**
   * DELETE vehicle by uid
   * @param uid uid of vehicle to delete.
   */
  deleteUid(uid: string): Observable<Vehicle> {
    return this.http.delete<Vehicle>(this.url + '/' + uid, httpOptions)
      .pipe(
        tap(() => this.logger.log(`VehicleService: delete vehicle uid=${uid}`)),
        catchError(this.httpUtilsService.handleError<Vehicle>('deleteUid'))
      );
  }
}
