import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Location } from 'src/app/core/models';
import { GoogleService, WeatherService } from 'src/app/core/services';

@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.component.html',
  styleUrls: ['./my-location.component.scss'],
})
export class MyLocationComponent implements OnInit {
  location!: Location;
  weather: any;
  googleResults$: Observable<any[]>;
  queryLocation!: string;
  today = new Date();
  locationString!: string;
  weatherDailyForecast!: any;

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private _weatherService: WeatherService, private _breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.get().then(async (resp) => {
      if (resp) {
        this.setWeather();
      }
    });
  }

  private async setWeather(setLocationString = true) {
    const weather: any = await this._weatherService.getWeather(this.location);
    if (weather) {
      this.weather = weather;
      this.queryLocation = weather.name;
      if (setLocationString) this.locationString = weather.name;
    }
  }

  private get() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          if (position) {
            this.location = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            resolve(position);
          } else {
            reject();
          }
        });
      } else {
        reject('request permission location');
      }
    });
  }

  public handleAddressChange(address: Address) {
    this.location = {
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng(),
    };
    console.log(address)
    this.locationString = address.formatted_address;
    this.setWeather(false);
  }

  trunc(temp: number) {
    return Math.trunc(temp);
  }

  getDate(date: string) {
    const [dia, data, mes, hora] = date.replace('.', '').split('_');
    return `${dia}, ${data} de ${mes} ${hora}`;
  }
}
