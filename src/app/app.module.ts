import {ScrollingModule} from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ArtistsComponent } from './artists/artists.component';
import { SampleComponent } from './sample/sample.component';
import { TokenService } from './token.service';
@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [
    TokenService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [TokenService], multi: true },
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [TokenService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



export function init_app(tokenService: TokenService) {
  return () => tokenService.initializeApp();
}

export function get_settings(tokenService: TokenService) {
  return () => tokenService.getSettings();
}
