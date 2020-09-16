import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {LoginService} from 'src/app/weather/services/login.service';
import {of} from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceMock;
  let userServiceMock;

  beforeEach(async(() => {
    loginServiceMock = jasmine.createSpyObj(['login'])
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [
        { provide: LoginService, useValue: loginServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits event when loginService returns true', (done) => {
    component.model.userName = 'max'
    component.model.password = 'expected'
    loginServiceMock.login.and.returnValue(of('someToken'));
    component.successfullLogin.subscribe(event => {
      expect(event).toBeTruthy();
      done()
    })
    component.login();
    expect(loginServiceMock.login).toHaveBeenCalledWith('max', 'expected');
  })

});
