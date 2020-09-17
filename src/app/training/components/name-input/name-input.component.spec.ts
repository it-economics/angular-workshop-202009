import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputComponent } from './name-input.component';
import { By } from '@angular/platform-browser';

describe('NameInputComponent', () => {
  let component: NameInputComponent;
  let fixture: ComponentFixture<NameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NameInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('writes input value to model on keypress', () => {
    let inputDebugElement = fixture.debugElement.query(By.css('input'));
    inputDebugElement.triggerEventHandler('keyup', { target: { value: 'a' } });
    expect(component.name).toEqual('a');
    inputDebugElement.triggerEventHandler('keyup', {
      target: { value: 'abc' },
    });
    expect(component.name).toEqual('abc');
  });

  it('emits name on ENTER', (done) => {
    component.enterPressed.subscribe((value) => {
      expect(value).toEqual('abc');
      done();
    });
    component.name = 'abc';
    let inputDebugElement = fixture.debugElement.query(By.css('input'));
    inputDebugElement.triggerEventHandler('keyup.enter', {
      target: { value: 'a' },
    });
  });
});
