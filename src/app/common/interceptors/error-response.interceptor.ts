import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export const errorResonseInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(catchError(handlerErrorResponse));

const handlerErrorResponse = (error: HttpErrorResponse): Observable<never> => {
  const erroResponse = `Error status: ${error.status} - message: ${error.message}`;
  return throwError(() => erroResponse);
}
