import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: any;

  constructor(
    private http: HttpClient
  ) { }

  async loadAppConfig(): Promise<any> {
    const assignConfig = (config: any) => this.config = config;

    return this.http
      .get('/assets/config.json')
      .toPromise()
      .then(assignConfig);
  }

  getBaseEndpoint(): string {
    return this.config.baseEndpoint;
  }
}
