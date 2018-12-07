import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private router: Router,
    private loggerService: LoggerService
  ) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        this.loggerService.log(`Logged in.`, user);
      } else {
        this.userDetails = null;
      }
    });
  }

  isLoggedIn() {
    return this.user != null;
  }

  async signIn(email: string, password: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    const success = await this._firebaseAuth.auth.signInAndRetrieveDataWithCredential(credential);
    return this.userDetails = success.user;
  }

  async register(email: string, password: string) {
    const success = await this._firebaseAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
    return this.userDetails = success.user;
  }

  logout() {
    this._firebaseAuth.auth.signOut();
    this.user = null;
    this.userDetails = null;
  }
}
