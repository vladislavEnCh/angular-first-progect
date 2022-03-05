import { Subject } from 'rxjs';
import { AuthService } from './page/login-page/auth.service';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { setAuthSelector } from './reducers/authReducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public notifier = new Subject();
  public auth$ = this.store.select(setAuthSelector);

  constructor(
    public store: Store,
    private router: Router,
    public authService: AuthService
  ) {}

  handleLogout() {
    if (this.auth$) {
      this.authService.logout();
      this.router.navigateByUrl('/login');
    }
  }
}
