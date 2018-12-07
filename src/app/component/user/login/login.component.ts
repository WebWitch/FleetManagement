import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, LoggerService } from '@/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  private redirectUri: string;
  public showSpinner = false;

  public user = {
    email: '',
    password: ''
  };

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
   * Handle login action.
   * @todo Implement proper error and validation handling for the form.
   */
  login() {
    this.showSpinner = true;
    this.authService.signIn(this.user.email, this.user.password)
      .then(res => {
        this.logger.log('Logged in', res);
        this.router.navigate([this.redirectUri || '/map']);
      }).catch(err => this.logger.error(err))
      .finally(() => this.showSpinner = false);
  }

  /**
   * Handle registration action.
   */
  register() {
    this.router.navigate(['/register'], { queryParams: { redirectUri: this.redirectUri } } );
  }
}
