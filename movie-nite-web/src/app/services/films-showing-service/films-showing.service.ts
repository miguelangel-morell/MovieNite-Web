import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsShowingAndComingSoon } from 'src/app/models/films/films-showing-and-coming-soon';

@Injectable({
  providedIn: 'root'
})
export class FilmsShowingService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = "https://localhost:44394/Api/FilmsShowing";
  readonly latParam = "?lat=";
  readonly longParam = "&lng=";

  filmsShowingObj: FilmsShowingAndComingSoon;

  getFilmsShowing(lat: string, lng: string): Observable<FilmsShowingAndComingSoon>
  {
    return this.http.get<FilmsShowingAndComingSoon>(this.baseUrl + this.latParam + lat + this.longParam + lng);
  }
}
