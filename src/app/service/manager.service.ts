import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, first } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private url = environment.url + '/manager';
  constructor(
    private logger: LoggerService,
    private http: HttpClient
    ) { }

  /**
   * GET managers from the server
   */
  getAll(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.url)
      .pipe(
        tap(() => this.logger.log('ManagerService: getAll()')),
        catchError(this.handleError('getAll', []))
      );
  }

  /**
   * GET a user by username
   * @param username Unique username
   */
  getUsername(username: string): Observable<Manager> {
    return this.http.get<Manager>(this.url)
      .pipe(
        first(managers => managers.username === username),
        tap(() => this.logger.log(`ManagerService: getUsername('${username}')`)),
        catchError(this.handleError<Manager>('getUsername', null))
      );
  }

  /**
   * GET a list of managers by username (or partial username)
   * @param term Name (or partial name) to search for
   */
  searchManagers(term: string): Observable<Manager[]> {
    if (!term.trim()) {
      return this.getAll();
    }

    return this.http.get<Manager[]>(this.url)
      .pipe(
        map(managers => managers.filter(manager => manager.username.includes(term))),
        tap(() => this.logger.log(`ManagerService: searchManagers('${term}')`)),
        catchError(this.handleError('getManagers', []))
      );
  }

  /**
   * PUT a new manager to the server
   * @param username The manager's username.
   * @param email The manager's email.
   * @param password The manager's plaintext password.
   */
  addManager(username: string, email: string, password: string): Observable<Manager> {
    const manager = new Manager();
    manager.username = username;
    manager.email = email;
    manager.password = password;

    return this.http.put<Manager>(this.url, manager, httpOptions).pipe(
      tap(() => this.logger.log(`ManagerService: added manager username=${manager.username}`)),
      catchError(this.handleError<Manager>('addManager'))
    );
  }

  /**
   * GET the vehicles associated with a manager's username.
   * @param username Manager username.
   */
  getManagerVehicles(manager: Manager): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.url + '/' + manager.username).pipe(
      tap(vehicles => this.logger.log(`ManagerService: got vehicles for manager=${manager.username}`, vehicles)),
      catchError(this.handleError<Vehicle[]>('getManagerVehicles'))
    );
  }

  /**
   * PUT a vehicle uid to a manager to associate the two.
   * @param manager Manager to associate a vehicle with.
   * @param vehicle Vehicle to add to a manager.
   */
  associateVehicle(manager: Manager, vehicle: Vehicle): Observable<Vehicle[]> {
    return this.http.put<Vehicle[]>(this.url + '/' + manager, vehicle.uid, httpOptions).pipe(
      tap(() => this.logger.log(`ManagerService: added vehicle ${vehicle.uid} for manager=${manager.username}`)),
      catchError(this.handleError<Vehicle[]>('associateVehicle'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(error);
      this.logger.log(`ManagerService: ${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
