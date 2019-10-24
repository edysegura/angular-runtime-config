import { AppConfigService } from './app-config.service';

export const initializerConfigFunction = (appConfig: AppConfigService) => {
  return () => appConfig.loadAppConfig();
};