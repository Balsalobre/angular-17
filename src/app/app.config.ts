import { ApplicationConfig } from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { errorResonseInterceptor } from './common/interceptors/error-response.interceptor';
import { headerLogsInterceptor } from './common/interceptors/headers-logs.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([errorResonseInterceptor, headerLogsInterceptor])
    ),
  ],
};
