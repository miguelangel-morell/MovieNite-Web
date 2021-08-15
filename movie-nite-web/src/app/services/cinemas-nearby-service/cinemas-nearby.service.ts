import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CinemasNearby } from 'src/app/models/cinemas/cinemas-nearby';

@Injectable({
  providedIn: 'root'
})
export class CinemasNearbyService {

  constructor(private http: HttpClient) { }
  
  readonly baseurl = "https://localhost:44394/Api/Cinemas";
  readonly latParam = "?lat=";
  readonly longParam = "&lng=";

  cinemasObj : CinemasNearby;

  getCinemasNearby(lat: string,long: string): Observable<CinemasNearby>
  {
    return this.http.get<CinemasNearby>(this.baseurl + this.latParam + lat + this.longParam + long);
  }
}
