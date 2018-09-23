import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, finalize, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../model';

interface TokenData {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  constructor(private http: HttpClient) { }

  loading = true;
  user: User = null;

  login(username: string, password: string): Observable<string> {
    return this.http
      .post<TokenData>('/api/users/login/', { username, password })
      .pipe(
        map(data => data.token),
        tap(token => {
          localStorage.setItem('auth', token);
        }),
        tap(() => {
          this.getProfile().subscribe();
        }),
      );
  }

  getProfile(): Observable<User> {
    this.loading = true;
    const token = localStorage.getItem('auth');
    if (!token) {
      this.loading = false;
      return throwError('no token');
    }
    return this.http.get<User>('/api/users/info/')
      .pipe(
        tap((user) => { this.user = user; }),
        finalize(() => { this.loading = false; })
      );
  }

  register(username, email, password): Observable<User> {
    return this.http
      .post<User>('/api/users/', { username, email, password });
  }

  lougout() {
    localStorage.removeItem('auth');
    this.user = null;
  }
}
