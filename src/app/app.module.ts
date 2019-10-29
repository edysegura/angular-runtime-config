import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { configProvider } from './config/config-initializer';
import { autoHttpPrefixerProvider } from './interceptors/api-prefixer.interceptor';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    configProvider,
    autoHttpPrefixerProvider
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
