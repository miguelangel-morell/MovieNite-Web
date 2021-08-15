import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsShowingAndComingSoon } from 'src/app/models/films/films-showing-and-coming-soon';

@Injectable({
  providedIn: 'root'
})
export class FilmsComingSoonService {

  readonly baseUrl = "https://localhost:44394/Api/FilmsComingSoon";
  readonly latParam = "?lat=";
  readonly longParam = "&lng=";
  
  filmsComingSoon: FilmsShowingAndComingSoon;

  constructor(private http: HttpClient) { }

  getFilmsComingSoon(lat: string, lng: string): Observable<FilmsShowingAndComingSoon>
   {
    return this.http.get<FilmsShowingAndComingSoon>(this.baseUrl + this.latParam + lat + this.longParam + lng);
  }

}
