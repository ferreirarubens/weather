import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, WeatherService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = {} as {
    email: string;
    password: string;
  };

  apiWeather = '';
  apiWeatherChecked = false;

  error = '';

  constructor(
    private _authService: AuthService,
    private _weatherService: WeatherService,
    private _router: Router
  ) {
    if (this._authService.isLogged()) {
      this._router.navigate(['']);
    }
  }

  login() {
    this.error = '';
    this._authService
      .login(this.credentials)
      .then((resp: any) => {
        console.log(resp);
        this._authService.saveUser({ ...resp, apiWeatherKey: this.apiWeather });
        this._router.navigate(['']);
      })
      .catch((err) => {
        this.error = err.message;
      });
  }

  async checkApiWeatherKey() {
    this.apiWeatherChecked = false;
    this.error = '';
    await this._weatherService
      .getWeather({ lat: 1, lng: 1 }, this.apiWeather)
      .then((resp) => {
        this.apiWeatherChecked = true;
      })
      .catch((err) => {
        this.error = err.error.message || 'Chave inválida para API';
      });
  }
}
