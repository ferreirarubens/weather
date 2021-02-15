import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingSub$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  show() {
    this.loadingSub$.next(true);
  }

  hide() {
    this.loadingSub$.next(false);
  }

  loading$ = () => this.loadingSub$.asObservable();
}
