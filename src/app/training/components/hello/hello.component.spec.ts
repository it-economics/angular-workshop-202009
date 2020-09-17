import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HelloComponent} from './hello.component';
import {By} from "@angular/platform-browser";

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('show hello world by defeault', () => {
    const paragraphTag: HTMLElement = fixture.debugElement.query(By.css('p')).nativeElement

    expect(paragraphTag.innerText).toEqual('Hello World!');
  });

  it('shows value from input', () => {
    component.name = 'Max';
    fixture.detectChanges()
    const paragraphTag: HTMLElement = fixture.debugElement.query(By.css('p')).nativeElement

    expect(paragraphTag.innerText).toEqual('Hello Max!');
  });
});
