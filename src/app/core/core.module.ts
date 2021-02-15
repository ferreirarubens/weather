import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MaterialModule } from './material/material.module';
import {
  AuthGuard,
  AuthService,
  WeatherService,
  LoadingService,
  LoadingInterceptor,
} from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule, GooglePlaceModule],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GooglePlaceModule,
    MaterialModule,
  ],
  declarations: [],
})
export class AppCoreModule {
  static forRoot(): ModuleWithProviders<AppCoreModule> {
    return {
      ngModule: AppCoreModule,
      providers: [
        AuthService,
        WeatherService,
        AuthGuard,
        LoadingService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingInterceptor,
          multi: true,
        },
      ],
    };
  }
}
