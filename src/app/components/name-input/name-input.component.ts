import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit {

  @Output()
  enterPressed: EventEmitter<string> = new EventEmitter<string>();

  name: string;

  constructor() {
  }

  onKeyPress(event: KeyboardEvent) {
    const inputElement: HTMLInputElement = event.target as HTMLInputElement;
    this.name = inputElement.value;
  }

  onEnterKeypress() {
    this.enterPressed.emit(this.name)
  }


  ngOnInit(): void {
  }

}
