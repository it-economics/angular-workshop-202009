import { of } from 'rxjs';
import { WeatherData } from './../models/weather';
import { endpoint, WeatherService } from './weather.service';

const expectedData: WeatherData = {
  temp: 22,
  temp_min: 15,
  temp_max: 27,
};

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientMock: any;

  beforeEach(() => {
    httpClientMock = jasmine.createSpyObj(['get']);
    httpClientMock.get.and.returnValue(of({ main: expectedData }));
    service = new WeatherService(httpClientMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns expected data', async (done) => {
    service.getCurrentTemp().subscribe((data) => {
      expect(data).toEqual(expectedData);
      expect(httpClientMock.get).toHaveBeenCalledWith(endpoint);
      done();
    });
  });
});
