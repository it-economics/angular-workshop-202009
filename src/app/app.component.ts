import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-example';
  myName = 'Max22';

  public setName(event) {
    this.myName = event;
  }
}
