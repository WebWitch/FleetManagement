import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, LoggerService } from '@/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  private redirectUri: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public showSpinner: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private logger: LoggerService
  ) { }

  ngOnInit() {
    this.redirectUri = this.route.snapshot.queryParams['redirectUri'];
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
        this.router.navigate([this.redirectUri || '/map']);
      }).catch(err =>
        this.logger.error(err)
      ).finally(() =>
        this.showSpinner = false
      );
  }
}
