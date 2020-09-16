import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { WeatherData } from './../models/weather';

export const endpoint =
  'http://api.openweathermap.org/data/2.5/weather?q=munich,de&units=metric&appid=a0191a5d64339913c4c10d7fea9774ba';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentTemp(): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(endpoint).pipe(
      tap((result) => console.log('WeatherData from server:', result)),
      map((result) => result['main']),
      tap((result) => console.log('WeatherData from server (cutted):', result))
    );
  }
}
