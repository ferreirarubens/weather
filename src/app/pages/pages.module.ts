import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { MainComponent } from './main/main.component';
import { routes as mainRoutes } from './main/main.routing';
import { MyLocationComponent } from './main/my-location/my-location.component';


@NgModule({
  imports: [AppCoreModule, SharedModule, AuthModule, RouterModule.forChild(mainRoutes)],
  exports: [],
  declarations: [MainComponent, MyLocationComponent],
  providers: [],
})
export class PagesModule { }
