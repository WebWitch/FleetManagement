import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { AuthService } from '@/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Fleet Management';
  env = environment.production ? null : environment.environment;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
