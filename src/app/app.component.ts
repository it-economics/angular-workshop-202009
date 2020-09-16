import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myName = 'Max22';

  public setName(event) {
    this.myName = event;
  }
}
