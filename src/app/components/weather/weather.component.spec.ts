import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './../../services/weather.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

const expected = { temp: '35' };

xdescribe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherServiceMock: any;

  beforeEach(async () => {
    weatherServiceMock = jasmine.createSpyObj(['getCurrentTemp']);
    weatherServiceMock.getCurrentTemp.and.returnValue(of(expected));
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      providers: [{ provide: WeatherService, useValue: weatherServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show temperature', () => {
    expect(component.temp).toBe(expected.temp);
    const temp: HTMLElement = fixture.debugElement.query(By.css('p'))
      .nativeElement;
    expect(temp.innerText).toContain(expected.temp);
  });
});
