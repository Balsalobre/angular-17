import { HttpInterceptorFn } from '@angular/common/http';
import { map } from 'rxjs';

export const headerLogsInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request headers:', req.headers);
  return next(req).pipe(
    map((res,) => {
      console.log('Response headers:', res);
      return res;
    })
  );
};
