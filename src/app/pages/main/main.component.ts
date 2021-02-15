import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-navigation>
      <router-outlet></router-outlet>
    </app-navigation>
  `
})

export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}