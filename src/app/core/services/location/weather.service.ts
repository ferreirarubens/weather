import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '../../models';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient, private _authService: AuthService) {}

  getWeather(location: Location, apiKey?: string) {
    return this._http
      .get(`${environment.api.weather.url}/weather`, {
        params: {
          appid: apiKey || this._authService.getUser().apiWeatherKey,
          lon: `${location.lng}`,
          lat: `${location.lat}`,
          units: 'metric',
          lang: 'pt_br',
        },
      })
      .toPromise();
  }
}
