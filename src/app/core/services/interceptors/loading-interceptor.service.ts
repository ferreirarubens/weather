import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from '../loading.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private _loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loadingService.show();
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this._loadingService.hide();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this._loadingService.hide();
        return throwError(error);
      })
    );
  }
}
