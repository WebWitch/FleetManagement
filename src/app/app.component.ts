import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Fleet Management';
  env = environment.production ? null : environment.environment;
  constructor(private authService: AuthService) { }
  logout() {
    this.authService.logout();
  }
}
