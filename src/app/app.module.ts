import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeTextComponent } from './home-text/home-text.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule }  from '@angular/common/http';
import { MovieServiceService } from './services/movie-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeTextComponent,
    HomeButtonComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
