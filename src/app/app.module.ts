import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCoreModule } from "./core/core.module";
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { routes as appRoutes } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { NgxLoadingModule } from 'ngx-loading';
import {NgxWebstorageModule} from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AppCoreModule.forRoot(),
    SharedModule,
    PagesModule,
    NgxLoadingModule.forRoot({}),
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
