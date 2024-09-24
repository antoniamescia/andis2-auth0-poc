import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthModule, AuthClientConfig } from '@auth0/auth0-angular';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-xngk2zwpy3vfe8zo.us.auth0.com',  
      clientId: 'l9nX62Eg1jSKCPCHB3S9ZeWuDPBlGjnF', 
      authorizationParams: {
        redirect_uri: window.location.origin + '/dashboard',
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
