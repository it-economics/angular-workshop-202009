import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponents, MockModule } from 'ng-mocks';

import { WeatherComponent } from './components/weather/weather.component';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponents(WeatherComponent, ChuckNorrisComponent),
      ],
      imports: [MockModule(MatToolbarModule)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
