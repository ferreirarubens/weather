import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCoreModule } from 'src/app/core/core.module';
import { routes as authRoutes } from "./auth.routing";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [AppCoreModule, RouterModule.forChild(authRoutes)],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class AuthModule { }
