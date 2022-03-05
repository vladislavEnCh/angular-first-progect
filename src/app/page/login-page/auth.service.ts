import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, shareReplay, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  get token(): any {
    const expDate: any = localStorage.getItem('expires_at');
    if (Date.now() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('id_token');
  }

  private setSession(authResult: any) {
    if (authResult) {
      const expiresAt = Date.now() + +authResult.expiresIn;

      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt.toString());
    } else {
      localStorage.clear();
    }
  }

  hendleError(error: HttpErrorResponse): any {
    const message = error.error;
    switch (message) {
      case 'Unauthorized':
        this.error$.next('Неправильный email или пароль');
        break;
    }
    console.log(message);
    return throwError(error);
  }

  registration(email: string, password: string): Observable<any> {
    return this.http.post('/api/reg', { email, password });
  }
  // ===========================================

  login(email: string, password: string): Observable<any> {
    return this.http.post('/api/login', { email, password }).pipe(
      tap((res: any) => this.setSession(res)),
      shareReplay(),
      catchError(this.hendleError.bind(this))
    );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // console.log('Client is Logout')
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
