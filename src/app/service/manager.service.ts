import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Manager } from '../models/manager.model';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import { HttpUtilsService } from './http-utils.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
    private db: AngularFirestore,
    private logger: LoggerService,
    private util: HttpUtilsService
  ) { }

  /**
   * Create a new manager.
   * @param username Unique username.
   * @param password Plaintext password.
   */
  addManager(username: string, password: string) {
    const id = this.db.createId();
    return this.db
      .collection('managers')
      .add({
        id,
        username,
        password
      });
  }

  /**
   * Get all managers.
   */
  getAll(): Observable<Manager[]> {
    return this.db.collection<Manager>('managers').valueChanges()
      .pipe(
        tap(_ => this.logger.log(`ManagerService: getAll()`)),
        catchError(this.util.handleError('getAll', []))
      );
  }

  /**
   * Get manager by id.
   * @param id The unique id.
   */
  get(id: string): Observable<Manager> {
    return this.db.collection<Manager>('managers').doc(id)
      .valueChanges().pipe(
        tap(_ => this.logger.log(`ManagerService: getAll()`)),
        catchError(this.util.handleError('getAll'))
      ) as Observable<Manager>;
  }

  /**
   * Search for a username beginning with the term.
   * @param term Term to search for.
   */
  search(term: string): Observable<Manager[]> {
    return this.db.collection<Manager>('managers', ref => ref.orderBy('username')
        .startAt(term)
        .endAt(term + '\uf8ff')
      ).valueChanges()
      .pipe(
        tap(_ => this.logger.log(`ManagerService: search('${term}')`)),
        catchError(this.util.handleError('search', []))
      );
  }

  /**
   * Update an existing manager to include new data.
   * @param manager The manager to update.
   */
  update(manager: Manager) {
    return this.db.collection<Manager>('managers').doc(manager.id).set({
      username: manager.username,
      password: manager.password,
    });
  }
}
