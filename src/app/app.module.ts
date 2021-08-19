import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeTextComponent } from './home-text/home-text.component';
import { HomeButtonComponent } from './home-button/home-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeTextComponent,
    HomeButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
