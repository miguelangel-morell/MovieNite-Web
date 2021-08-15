import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmShowtime } from 'src/app/models/films/film-showtime';


@Injectable({
  providedIn: 'root'
})
export class FilmShowtimeService {

  constructor(private http: HttpClient) { }

  readonly baseurl = "https://localhost:44394/Api/FilmShowtimes/";
  readonly latParam = "?lat=";
  readonly longParam = "&lng=";

  getFilmShowtimes(filmId: number,lat: string, lng: string): Observable<FilmShowtime>{
    return this.http.get<FilmShowtime>(this.baseurl + filmId + this.latParam + lat + this.longParam + lng);
  }
}
