import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegistrationComponent} from './registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from 'src/app/weather/services/user.service';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let userServiceMock;

  beforeEach(async(() => {
    userServiceMock = jasmine.createSpyObj(['create'])
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports:[ReactiveFormsModule],
      providers:[
        {provide: UserService, useValue: userServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
