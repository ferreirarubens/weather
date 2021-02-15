import { Component, OnInit } from '@angular/core';
import * as bcrypt from 'bcryptjs';
import { LoadingService } from 'src/app/core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-weather';

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
  }
}
