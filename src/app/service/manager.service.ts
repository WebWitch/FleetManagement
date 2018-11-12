import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, first } from 'rxjs/operators';

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
        tap(_ => this.logger.log('ManagerService: getAll()')),
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
        tap(_ => this.logger.log(`ManagerService: getUsername('${username}')`)),
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
        tap(_ => this.logger.log(`ManagerService: searchManagers('${term}')`)),
        catchError(this.handleError('getManagers', []))
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
