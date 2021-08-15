import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from 'src/app/services/geo-location-service/geo-location.service';
import { GeoLocation } from 'src/app/models/geolocation/geo-location';
import { Data } from 'src/app/models/geolocation/data';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.component.html',
  styleUrls: ['./geo-location.component.scss']
})
export class GeoLocationComponent implements OnInit {

  geoLocationForm = new FormGroup({
    selectState:  new FormControl('',Validators.required),
    inputCity:    new FormControl('',Validators.required),
    selectCity:   new FormControl('',Validators.required)
  });

  constructor(public geoLocationService: GeoLocationService) { }

  ngOnInit(): void {
  }
  stateSelected:      string;
  selectOption:       string;
  selectgeoLoaction:  string;
  cityInput:          string = "";

  searchState:          boolean = true;
  searchCity:           boolean = false;
  showCitySearch:       boolean = true;
  showCityResult:       boolean = false;
  showCinemasNearby:    boolean = false;
  isValid:              boolean = true;
  isValidInput:         boolean = true;
  isValidCityState:     boolean = true;

  geolocationObj: GeoLocation;
  geoData:  Data = {name: "", latitude: 0, longitude: 0};

  subs: Subscription = new Subscription();
  
  stateCodes = [
    { name: "ALABAMA"	      ,         value: "AL"},
    { name: "ALASKA"	      ,         value: "AK"},
    { name: "ARIZONA"	      ,         value: "AZ"},
    { name: "ARKANSAS"	    ,         value: "AR"},
    { name: "CALIFORNIA"	  ,         value: "CA"},
    { name: "COLORADO"	    ,         value: "CO"},
    { name: "CONNECTICUT"	  ,         value: "CT"},
    { name: "DELAWARE"	    ,         value: "DE"},
    { name: "FLORIDA"	      ,         value: "FL"},
    { name: "GEORGIA"	      ,         value: "GA"},
    { name: "HAWAII"	      ,         value: "HI"},
    { name: "IDAHO"	        ,         value: "ID"},
    { name: "ILLINOIS"	    ,         value: "IL"},
    { name: "INDIANA"	      ,         value: "IN"},
    { name: "IOWA"	        ,         value: "IA"},
    { name: "KANSAS"	      ,         value: "KS"},
    { name: "KENTUCKY"	    ,         value: "KY"},
    { name: "LOUISIANA"	    ,         value: "LA"},
    { name: "MAINE"	        ,         value: "ME"},
    { name: "MARYLAND"	    ,         value: "MD"},
    { name: "MASSACHUSETTS"	,         value: "MA"},
    { name: "MICHIGAN"	    ,         value: "MI"},
    { name: "MINNESOTA"	    ,         value: "MN"},
    { name: "MISSISSIPPI"	  ,         value: "MS"},
    { name: "MISSOURI"	    ,         value: "MO"},
    { name: "MONTANA"	      ,         value: "MT"},
    { name: "NEBRASKA"	    ,         value: "NE"},
    { name: "NEVADA"	      ,         value: "NV"},
    { name: "NEW HAMPSHIRE"	,         value: "NH"},
    { name: "NEW JERSEY"	  ,         value: "NJ"},
    { name: "NEW MEXICO"	  ,         value: "NM"},
    { name: "NEW YORK"	    ,         value: "NY"},
    { name: "NORTH CAROLINA", 	      value: "NC"},
    { name: "NORTH DAKOTA"	,         value: "ND"},
    { name: "OHIO"	        ,         value: "OH"},
    { name: "OKLAHOMA"	    ,         value: "OK"},
    { name: "OREGON"	      ,         value: "OR"},
    { name: "PENNSYLVANIA"	,         value: "PA"},
    { name: "RHODE ISLAND"	,         value: "RI"},
    { name: "SOUTH CAROLINA", 	      value: "SC"},
    { name: "SOUTH DAKOTA"	,         value: "SD"},
    { name: "TENNESSEE"	    ,         value: "TN"},
    { name: "TEXAS"	        ,         value: "TX"},
    { name: "UTAH"	        ,         value: "UT"},
    { name: "VERMONT"	      ,         value: "VT"},
    { name: "VIRGINIA"	    ,         value: "VA"},
    { name: "WASHINGTON"	  ,         value: "WA"},
    { name: "WEST VIRGINIA"	,         value: "WV"},
    { name: "WISCONSIN"	    ,         value: "WI"},
    { name: "WYOMING"	      ,         value: "WY"}
  ];
  
  nextButton(data): void 
  {
    console.log(data)
    if(data != '')
    {
      for (var state of this.stateCodes) 
       {
         if(state.name === data)
         {
           this.stateSelected = state.value;
         }
       }

       this.searchState = false;
       this.searchCity = true;
    }
    else
    {
        this.isValid = false;
    }
    
  }

  showCityState(value): void 
  {
    if(value != '')
    {
      this.isValidInput = true;

      this.subs.add(this.geoLocationService.getGeoLocation(this.stateSelected, value)
          .subscribe(data => this.geolocationObj = data));

      this.searchCity = false;
      this.showCityResult = true;      
    }
    else
    {
      this.isValidInput = false;
    }

  }

  assignLocationValues(data): void 
  {
    if(data != '')
    {
      this.isValidCityState = true;

        for (var city of this.geolocationObj.data)
       {
        if(data === (city.name + ", " + this.stateSelected))
        {
          this.geoData.name = city.name;
          this.geoData.latitude = city.latitude;
          this.geoData.longitude = city.longitude;
          this.showCinemasNearby = true;
          this.showCitySearch = false;
          this.subs.unsubscribe();
          break;
        }

      }
    }
    else
    {
      this.isValidCityState = false;
    }
    
    //console.log("City,State: " + this.geoData.name + "," + this.stateSelected + " (Lat: " + this.geoData.latitude + ", Long: " + this.geoData.longitude + ")");
  }

  changeStateSelection(){
    this.isValid = true;
  }

  inputChanged(){
    this.isValidInput = true;
  }

  searchAgain(){
    this.searchCity = true;
    this.showCityResult = false;   
    this.geolocationObj = undefined; 
  }

  changeCityStateSelection(){
    this.isValidCityState = true;
  }
}
