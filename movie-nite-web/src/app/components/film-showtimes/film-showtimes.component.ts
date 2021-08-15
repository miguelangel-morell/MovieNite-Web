import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CinemaShowtime } from 'src/app/models/cinemas/cinema-showtime';
import { FilmShowtime } from 'src/app/models/films/film-showtime';
import { FilmShowtimeDetail } from 'src/app/models/films/film-showtime-detail';
import { FilmShowtimeService } from 'src/app/services/film-showtime-service/film-showtime.service';

@Component({
  selector: 'app-film-showtimes',
  templateUrl: './film-showtimes.component.html',
  styleUrls: ['./film-showtimes.component.scss']
})
export class FilmShowtimesComponent implements OnInit {

  @Input() filmId:    number;
  @Input() lat:       string;
  @Input() long:      string;
  @Input() cinemaId:  number;
  
  filmShowtimes:  FilmShowtimeDetail;
  cinemaShowtimes: CinemaShowtime[];
  sub:            Subscription;


  constructor(public filmShowtimeService: FilmShowtimeService) { }

  ngOnInit(): void {
    
    this.sub = this.filmShowtimeService.getFilmShowtimes(this.filmId,this.lat,this.long)
                .subscribe(data => { this.filmShowtimes = data.film; this.cinemaShowtimes = data.cinemas });
    
    //this.populatecinemaShowtime();
  }



}
