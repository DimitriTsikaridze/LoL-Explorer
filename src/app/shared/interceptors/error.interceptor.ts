import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (
        err.status === HttpStatusCode.NotFound ||
        err.status === HttpStatusCode.Forbidden
      ) {
        router.navigate(['not-found']);
      }
      return throwError(() => err);
    })
  );
};
