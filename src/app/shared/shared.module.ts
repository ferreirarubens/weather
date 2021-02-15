import { NgModule } from '@angular/core';

import { AppCoreModule } from '../core/core.module';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [AppCoreModule],
  exports: [NavigationComponent],
  declarations: [NavigationComponent],
  providers: [],
})
export class SharedModule {}
