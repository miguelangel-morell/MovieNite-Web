import { Component, OnInit, Input } from '@angular/core';
import { FilmsShowingAndComingSoon } from 'src/app/models/films/films-showing-and-coming-soon';

@Component({
  selector: 'app-films-showing-filter',
  templateUrl: './films-showing-filter.component.html',
  styleUrls: ['./films-showing-filter.component.scss']
})
export class FilmsShowingFilterComponent implements OnInit {

  @Input() films: FilmsShowingAndComingSoon;

  constructor() { }

  ngOnInit(): void {
    if(this.films)
    {
      
    }
  }



}
