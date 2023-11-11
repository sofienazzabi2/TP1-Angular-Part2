import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://apilb.tridevs.net/api/Users/login';
  private authTokenKey = 'auth_token';

  private userSubject = new BehaviorSubject<any>(null);
  user$: Observable<any> = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<boolean> {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      map((response) => {
        if (response && response.id) {
          localStorage.setItem(this.authTokenKey, response.id);
          this.userSubject.next(response);
          console.log(response);
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }
}
