import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CinemasNearby } from 'src/app/models/cinemas/cinemas-nearby';
import { Data } from 'src/app/models/geolocation/data';
import { CinemasNearbyService } from 'src/app/services/cinemas-nearby-service/cinemas-nearby.service';


@Component({
  selector: 'app-cinemas-nearby',
  templateUrl: './cinemas-nearby.component.html',
  styleUrls: ['./cinemas-nearby.component.scss']
})
export class CinemasNearbyComponent implements OnInit {

  @Input() geoLocationData: Data = {name: "", latitude: 0, longitude: 0};

  filmsShowing: boolean = false;
  cinemasNearby: CinemasNearby;
  selectedCinemaId: number;
  selectedCinemaLat: string;
  selectedCinemaLng: string;

  subs : Subscription = new Subscription();
  
  constructor(public cinemasService: CinemasNearbyService) { }

  ngOnInit(): void {
    console.log(this.geoLocationData.latitude + ";" + this.geoLocationData.longitude);

    this.subs.add(this.cinemasService.getCinemasNearby(this.geoLocationData.latitude.toString(),this.geoLocationData.longitude.toString())
    .subscribe(data => this.cinemasNearby = data));

  }

  selectCinema(item): void{
    this.selectedCinemaId   = item.cinema_id;
    this.selectedCinemaLat  = item.lat;
    this.selectedCinemaLng  = item.lng;
    console.log(item);
    console.log(this.selectedCinemaId);
    this.filmsShowing = true; 
    this.subs.unsubscribe();
  }

}
