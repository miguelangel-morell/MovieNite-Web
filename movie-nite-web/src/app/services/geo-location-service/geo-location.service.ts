import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { GeoLocation } from 'src/app/models/geolocation/geo-location';


@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = "https://localhost:44394/Api/GeoLocation";
  readonly paramSC = "?SC=";
  readonly paramCP = "&CP=";

  geoLocationObj: GeoLocation;

  getGeoLocation(stateCode,cityPrefix): Observable<GeoLocation>
  {
    return this.http.get<GeoLocation>(this.baseUrl + this.paramSC + stateCode + this.paramCP + cityPrefix);
  }
}
