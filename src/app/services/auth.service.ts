import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

const USER = 'super';
const PASS = 'secret';

interface AuthStatus {
  authenticated: boolean;
  user?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private status = new BehaviorSubject<AuthStatus>({ authenticated: false });
  private tempStatus: undefined | AuthStatus = undefined;

  private token: string;

  constructor() {}

  status$(): Observable<AuthStatus> {
    return this.status.asObservable();
  }

  loggedIn = false;

  public login(username: string, password: string): Observable<AuthStatus> {
    /**
    return httClient.post('/auth', parame).pipe(
      map((result) => {
        this.status.next(status);
        this.token = result.token;
      })
    );
    */
    if (username === USER && password === PASS) {
      const status: AuthStatus = { authenticated: true, user: username };
      this.status.next(status);
      this.tempStatus = status;
      this.loggedIn = true;
      return of(status);
    }
    return of({
      authenticated: false,
      err: 'username oder password isst falsch!',
    });
  }

  public updateName(name: String) {
    if (this.tempStatus.authenticated) {
      this.status.next(Object.assign({}, this.tempStatus, { user: name }));
    }
  }
}
