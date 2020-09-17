import { TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MockComponents, MockModule } from 'ng-mocks';
import { AppComponent } from './app.component';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { HelloListComponent } from './components/hello-list/hello-list.component';
import { HelloComponent } from './components/hello/hello.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { WeatherComponent } from './components/weather/weather.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponents(
          ChuckNorrisComponent,
          HelloComponent,
          HelloListComponent,
          NameInputComponent,
          WeatherComponent
        ),
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
