import { IValueLogin, IValueRegistration } from './interfaces/interfaces';
import { DestroyService } from './../../services/destroy.service';

import { AuthService } from './auth.service';
import { setAuth } from './../../reducers/authReducer';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';

import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  public formLoginGroup!: FormGroup;
  public valueLogin!: IValueLogin;
  public valueRegistration!: IValueRegistration;

  constructor(
    private router: Router,
    public authService: AuthService,
    public store: Store,
    @Inject(DestroyService) private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.formLoginGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  // ========================Кнопка Логина

  submit() {
    if (this.formLoginGroup.invalid) {
      return;
    }
    this.valueLogin = this.formLoginGroup.value;
    if (this.valueLogin.email && this.valueLogin.password) {
      this.authService
        .login(this.valueLogin.email, this.valueLogin.password)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          console.log('User is logged in');
          this.store.dispatch(setAuth({ auth: true }));
          this.formLoginGroup.reset();
          this.router.navigateByUrl('/');
        });
    }
  }
  // ======================кнопка регистр
  handleReg() {
    if (this.formLoginGroup.invalid) {
      return;
    }
    this.valueRegistration = this.formLoginGroup.value;
    if (this.valueRegistration.email && this.valueRegistration.password) {
      this.authService
        .registration(
          this.valueRegistration.email,
          this.valueRegistration.password
        )
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          console.log('User is Reg');
          this.router.navigateByUrl('/login');
          this.formLoginGroup.reset();
        });
    }
  }
}
