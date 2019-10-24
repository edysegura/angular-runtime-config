import { APP_INITIALIZER, Provider } from '@angular/core';

import { AppConfigService } from './app-config.service';

const initializerConfigFunction = (appConfig: AppConfigService) => {
  return () => appConfig.loadAppConfig();
};

export const configProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializerConfigFunction,
  multi: true,
  deps: [ AppConfigService ]
}