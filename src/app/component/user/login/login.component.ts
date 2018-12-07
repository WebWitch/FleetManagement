import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoggerService } from '@/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public showSpinner = false;

  public user = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private logger: LoggerService
  ) { }

  ngOnInit() {
  }

  /**
   * Handle login action.
   * @todo Implement proper error and validation handling for the form.
   */
  login() {
    this.showSpinner = true;
    this.authService.signIn(this.user.email, this.user.password)
      .then(res => {
        this.logger.log('Logged in', res);
        this.router.navigate(['/map']);
      }).catch(err => this.logger.error(err))
      .finally(() => this.showSpinner = false);
  }

  /**
   * Handle registration action.
   */
  register() {
    this.router.navigate(['/register']);
  }
}
