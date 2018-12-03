import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Manager } from './manager.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  managersRef: AngularFireList<any>;
  managerRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase
  ) { }

  /**
   * Add a new manager.
   * @param manager The manager object to add.
   */
  AddManager(manager: Manager) {
    this.managersRef.push({
      username: manager.username,
      email: manager.email,
    });
  }

  /**
   * Get a single Manager.
   * @param id The unique id of the manager.
   */
  GetManager(id: string): AngularFireObject<Manager> {
    this.managerRef = this.db.object('managers/' + id);
    return this.managerRef;
  }

  /**
   * Get all managers.
   */
  GetManagers(): AngularFireList<Manager> {
    this.managersRef = this.db.list('managers');
    return this.managersRef;
  }

  /**
   * Update a manager object.
   * @param id The unique id of the manager to update.
   * @param manager The manager object to replace the existing object with.
   */
  UpdateManager(id: string, manager: Manager) {
    this.GetManager(id);
    this.managerRef.update({
      username: manager.username,
      email: manager.email
    });
  }

  DeleteManager(id: string) {
    this.GetManager(id);
    this.managerRef.remove();
  }
}
