import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { AppConfigService } from '../config/app-config.service';

@Injectable()
export class ApiPrefixerInterceptor implements HttpInterceptor {

  constructor(
    private readonly appConfig: AppConfigService
  ) { }

  checkUrlToPrefix(url: string): boolean {
    return !/^http(s)?:/i.test(url) && !url.startsWith('/assets/');
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.checkUrlToPrefix(request.url)) {
      request = request.clone({
        url: this.appConfig.getBaseEndpoint() + request.url
      });
    }
    return next.handle(request);
  }
}

export const autoHttpPrefixerProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiPrefixerInterceptor,
  multi: true
}