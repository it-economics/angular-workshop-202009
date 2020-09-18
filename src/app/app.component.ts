import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myName = '';

  constructor(private authService: AuthService) {
    authService.status$().subscribe((result) => {
      if (result.authenticated) {
        this.myName = result.user;
      }
    });
  }

  public setName(event) {
    this.myName = event;
  }
}
