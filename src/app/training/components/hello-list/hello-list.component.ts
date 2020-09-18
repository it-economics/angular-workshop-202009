import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-list',
  templateUrl: './hello-list.component.html',
  styleUrls: ['./hello-list.component.scss']
})
export class HelloListComponent implements OnInit {

  names: string[] = ['Barbara', 'Dominik', 'Karl'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
