import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmsShowingAndComingSoon } from 'src/app/models/films/films-showing-and-coming-soon';
import { FilmsShowingService } from 'src/app/services/films-showing-service/films-showing.service';

@Component({
  selector: 'app-films-showing',
  templateUrl: './films-showing.component.html',
  styleUrls: ['./films-showing.component.scss']
})
export class FilmsShowingComponent implements OnInit {

  @Input() cinemaId: number;
  @Input() cinemaLat: string;
  @Input() cinemaLng: string;

  showShowtimes:  boolean = false;
  showComingSoon: boolean = false;
  filmId:         number;

  filmsShowing: FilmsShowingAndComingSoon;
  sub:          Subscription;
  
  constructor(public filmsShowingService: FilmsShowingService) { }

  ngOnInit(): void {
     this.sub = this.filmsShowingService.getFilmsShowing(this.cinemaLat,this.cinemaLng)
    .subscribe(data => this.filmsShowing = data);
  }

  viewShowtimes(filmId: number): void{
    this.filmId = filmId;
    this.showShowtimes = true;
    this.sub.unsubscribe();
  }

  viewComingSoon(): void{
    this.showComingSoon = true;
    this.sub.unsubscribe();
  }

}
