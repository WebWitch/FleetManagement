import { Injectable } from '@angular/core';
import { Manager } from '../models/manager.model';
import { ManagerService } from './manager.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private manager: Manager;
  private _isAuthenticated = false;
  constructor(
    private managerService: ManagerService
  ) { }

  /**
   * Get the current user.
   */
  get user() {
    return this.manager;
  }

  /**
   * Get the authentication status.
   */
  get isAuthenticated() {
    return this._isAuthenticated;
  }

  /**
   * Validate the password hash matches the provided password.
   * @param password The password entered into the client.
   * @param hash The hash provided from the server.
   * @todo Make this actually work.
   */
  private validatePassword(password, hash): boolean {
    return true;
  }

  /**
   * Login as a manager.
   * @param username The username of a manager.
   * @param password The plaintext password of a manager.
   * @returns True if it succeeded, false otherwise.
   */
  login(username, password): boolean {
    this.managerService.getUsername(username).subscribe(manager => {
      if (this.validatePassword(password, manager.password)) {
        this.manager = manager;
        this._isAuthenticated = true;
      }

      this._isAuthenticated = false;
    });

    return this._isAuthenticated;
  }

  /**
   * Register a new manager.
   * @param username The username of the manager.
   * @param password The plaintext password of the manager.
   * @returns True if the user is now authenticated, false otherwise.
   */
  register(username, password): boolean {
    this.managerService.addManager(username, password).subscribe(manager => {
      this.manager = manager;
      this._isAuthenticated = true;
    });

    return this._isAuthenticated;
  }
}
