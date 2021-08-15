import { Component, Input, OnInit } from '@angular/core';
import { FilmsShowingAndComingSoon } from 'src/app/models/films/films-showing-and-coming-soon';
import { FilmsComingSoonService } from 'src/app/services/films-coming-soon/films-coming-soon.service';

@Component({
  selector: 'app-films-coming-soon',
  templateUrl: './films-coming-soon.component.html',
  styleUrls: ['./films-coming-soon.component.scss']
})
export class FilmsComingSoonComponent implements OnInit {

  @Input() lat:       string;
  @Input() long:      string;

  filmsComingSoon: FilmsShowingAndComingSoon;
  
  constructor(public filmsComingSoonService: FilmsComingSoonService) { }

  ngOnInit(): void {
    this.filmsComingSoonService.getFilmsComingSoon(this.lat, this.long)
    .subscribe(data => this.filmsComingSoon = data);
  }

}
