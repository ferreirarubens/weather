# Weather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

This application aims to obtain the user's location and provide the current weather, in addition to providing the current weather from any other location that the user wishes.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Login

At the login, the user must insert the email, password, and the Key from the [API Weather](https://home.openweathermap.org/api_keys)

- login: user@weather.com
- password: user@password

### Mobile

<img src="https://raw.githubusercontent.com/ferreirarubens/weather/main/images/login-mobile.png" alt="logo" width="350">

### WEB

<img src="https://raw.githubusercontent.com/ferreirarubens/weather/main/images/login.png" alt="logo" width="100%">

## Main Page

On this page, the app will request by current location from the user, and after that, if the user authorizes, the app shows the current weather from that location

Even If not (user location authorization), the app allows the user to search for other places to get weather info

<img src="https://raw.githubusercontent.com/ferreirarubens/weather/main/images/main-search.png" alt="logo" width="350">

### Mobile

<img src="https://raw.githubusercontent.com/ferreirarubens/weather/main/images/main-mobile.png" alt="logo" width="350">

### WEB

<img src="https://raw.githubusercontent.com/ferreirarubens/weather/main/images/main.png" alt="logo" width="100%">

## Libs

- [Angular Material](https://material.angular.io/) - Material Design components for Angular
- [scss-layout](https://github.com/ferreirarubens/scss-layout) - A SCSS lib to make easy the apply some syles using css classes (By me)
- [ngx-google-places-autocomplete](https://www.npmjs.com/package/ngx-google-places-autocomplete) - to found location by query string
- [ngx-loading](https://www.npmjs.com/package/ngx-loading) - Loading
- [ngx-webstorage](https://www.npmjs.com/package/ngx-webstorage) - To manage session storage
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - To hash password

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
