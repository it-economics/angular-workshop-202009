import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface Credentials {
  userName: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginError: boolean;

  model: Credentials = {
    userName: undefined,
    password: undefined,
  };

  constructor(/*private router: Router, private activatedRoute: ActivatedRoute*/) {}

  ngOnInit() {}

  login() {
    // this.router.navigate(['/hello/hello-input'], {relativeTo: this.activatedRoute});
  }
}
