import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  constructor(
    private logger: LoggerService
  ) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(error);
      this.logger.log(`ManagerService: ${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
