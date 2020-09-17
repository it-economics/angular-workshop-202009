import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { endpoint, WeatherService } from './weather.service';

const expectedData: any = {
  main: {
    temp: 22,
    temp_min: 15,
    temp_max: 27,
  },
};

describe('WeatherService', () => {
  let service: WeatherService;
  let mockHttpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    mockHttpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns expected data', () => {
    service.getCurrentTemp().subscribe((data) => {
      expect(data).toEqual(expectedData.main);
    });

    const req = mockHttpController.expectOne(endpoint);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData);
    mockHttpController.verify();
  });
});
