import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  @Output() submitted = new EventEmitter();

  value = 100;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.value += 100;
    }, 1000);
  }

  public getName(): string {
    return "Max from Methode";
  }

  public resetValue() {
    this.submitted.emit(this.value);
    this.value = 0;
  }
}
