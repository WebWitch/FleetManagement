import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public password: string;
  public confirmPassword: string;
  public showSpinner: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private logger: LoggerService
  ) { }

  ngOnInit() {
  }

  /**
   * Handle registration action.
   * @todo Implement proper error and validation handling for the form.
   */
  register(): void {
    this.showSpinner = true;
    if (this.password !== this.confirmPassword) {
      this.showSpinner = false;
      return alert('Double check that passwords match.');
    }

    this.authService.register(this.email, this.password)
      .then(res => {
        this.logger.log('Registered', res);
        this.router.navigate(['/map']);
      }).catch(err =>
        this.logger.error(err)
      ).finally(() =>
        this.showSpinner = false
      );
  }
}
