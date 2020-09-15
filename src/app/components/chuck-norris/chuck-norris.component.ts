import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.scss'],
})
export class ChuckNorrisComponent implements OnInit {
  private _joke: string = '';

  constructor() {}

  ngOnInit(): void {}

  get joke() {
    return this._joke;
  }

  fetchJoke() {
    this._joke = 'Chuck Norris nießt mit offenen Augen!';
  }
}
