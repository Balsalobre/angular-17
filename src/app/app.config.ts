import { ApplicationConfig } from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { errorResonseInterceptor } from './common/interceptors/error-response.interceptor';
import { headerLogsInterceptor } from './common/interceptors/headers-logs.interceptor';
import { provideRouter } from '@angular/router';
import { mainRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(mainRoutes),
    provideHttpClient(
      withFetch(),
      withInterceptors([errorResonseInterceptor, headerLogsInterceptor])
    ),
  ],
};
