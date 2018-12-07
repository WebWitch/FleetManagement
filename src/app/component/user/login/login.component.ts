import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LoggerService } from 'src/app/service/logger.service';

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

  login() {
    this.showSpinner = true;
    this.authService.signIn(this.user.email, this.user.password)
      .then(res => {
        this.logger.log('Logged in', res);
      }).catch(err => this.logger.error(err))
      .finally(() => this.showSpinner = false);
  }

  register() {
    this.router.navigate(['/register']);
  }
}
