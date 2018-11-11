import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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

  getAll(): Observable<Manager[]> {
    this.logger.log('ManagerService: call to getAll()', this.url);
    return this.http.get<Manager[]>(this.url)
      .pipe(
        tap(_ => this.logger.log('fetched managers')),
        catchError(this.handleError('getAll', []))
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
