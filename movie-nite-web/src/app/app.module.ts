import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoLocationComponent } from './components/geo-location/geo-location/geo-location.component';
import { CinemasNearbyComponent } from './components/cinemas-nearby/cinemas-nearby/cinemas-nearby.component';
import { FilmsShowingComponent } from './components/films-showing/films-showing/films-showing.component';
import { FilmsShowingFilterComponent } from './components/films-showing/films-showing-filter/films-showing-filter.component';
import { FilmShowtimesComponent } from './components/film-showtimes/film-showtimes.component';
import { FilmShowtimeHoursComponent } from './components/film-showtimes/film-showtime-hours/film-showtime-hours.component';
import { FilmsComingSoonComponent } from './components/films-coming-soon/films-coming-soon/films-coming-soon.component';



@NgModule({
  declarations: [
    AppComponent,
    GeoLocationComponent,
    CinemasNearbyComponent,
    FilmsShowingComponent,
    FilmsShowingFilterComponent,
    FilmShowtimesComponent,
    FilmShowtimeHoursComponent,
    FilmsComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
