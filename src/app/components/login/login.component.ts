import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  login() {}
}
