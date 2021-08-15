import { Component, Input, OnInit } from '@angular/core';
import { CinemaShowtime } from 'src/app/models/cinemas/cinema-showtime';

@Component({
  selector: 'app-film-showtime-hours',
  templateUrl: './film-showtime-hours.component.html',
  styleUrls: ['./film-showtime-hours.component.scss']
})
export class FilmShowtimeHoursComponent implements OnInit {

  @Input() cinemas: CinemaShowtime[];
  @Input() cinemaId: number;

  standardTimes: any[] = [];
  imaxTimes: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.findCinema(this.cinemas);
  }

  findCinema(cinemas: CinemaShowtime[]): void{
    for (var cinema of cinemas) {
      if(this.cinemaId === cinema.cinema_id)
      {
        console.log("found id");
        if(cinema.showings.Standard )
        {
          for (var standardTimes of cinema.showings.Standard.times)
          {
            this.standardTimes.push(
              {
                start_time: new Date(standardTimes.start_time).toLocaleTimeString().replace(/:\d+ /, ' '),
                end_time: new Date(standardTimes.end_time).toLocaleTimeString().replace(/:\d+ /, ' ')
              }
            );
          }
        }

        if(cinema.showings.IMAX !== null)
        {
          for (var imaxTimes of cinema.showings.IMAX.times)
          {
            this.imaxTimes.push(
              {
                start_time: new Date(imaxTimes.start_time).toLocaleTimeString().replace(/:\d+ /, ' '),
                end_time: new Date(imaxTimes.end_time).toLocaleTimeString().replace(/:\d+ /, ' ')
              }
            );
          }
        }
        
      }
    }
  }

}
