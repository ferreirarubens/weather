import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/services';
import { MainComponent } from './main.component';
import { MyLocationComponent } from './my-location/my-location.component';

export const routes: Routes = [
  {
    path: '', 
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MyLocationComponent
      },
    ]
  }
]