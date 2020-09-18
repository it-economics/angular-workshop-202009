import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: Credentials = {
    email: undefined,
    password: undefined,
  };

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService
      .login(this.model.email, this.model.password)
      .subscribe((result) => {
        if (!!result.authenticated) {
          this.router.navigate(['/input']);
        } else {
          console.warn('Unauthorized');
        }
      });
  }
}
