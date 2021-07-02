import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from 'src/app/services/geo-location-service/geo-location.service';
import { GeoLocation } from 'src/app/models/geolocation/geo-location';
import { Data } from 'src/app/models/geolocation/data';

@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.component.html',
  styleUrls: ['./geo-location.component.scss']
})
export class GeoLocationComponent implements OnInit {

  constructor(public geoLocationService: GeoLocationService) { }

  ngOnInit(): void {
  }
  stateSelected:      string;
  selectOption:       string;
  selectgeoLoaction:  string;
  cityInput:          string = "";

  searchCity:           boolean = false;
  showCityResult:       boolean = false;

  geolocationObj: GeoLocation;
  geoData:  Data = {name: "", latitude: 0, longitude: 0};
  
  stateCodes = [
    { name: "ALABAMA"	      ,         value: "AL"},
    { name: "ALASKA"	      ,           value: "AK"},
    { name: "ARIZONA"	      ,         value: "AZ"},
    { name: "ARKANSAS"	    ,           value: "AR"},
    { name: "CALIFORNIA"	  ,           value: "CA"},
    { name: "COLORADO"	    ,           value: "CO"},
    { name: "CONNECTICUT"	  ,         value: "CT"},
    { name: "DELAWARE"	    ,           value: "DE"},
    { name: "FLORIDA"	      ,         value: "FL"},
    { name: "GEORGIA"	      ,         value: "GA"},
    { name: "HAWAII"	      ,           value: "HI"},
    { name: "IDAHO"	        ,         value: "ID"},
    { name: "ILLINOIS"	    ,           value: "IL"},
    { name: "INDIANA"	      ,         value: "IN"},
    { name: "IOWA"	        ,           value: "IA"},
    { name: "KANSAS"	      ,           value: "KS"},
    { name: "KENTUCKY"	    ,           value: "KY"},
    { name: "LOUISIANA"	    ,         value: "LA"},
    { name: "MAINE"	        ,         value: "ME"},
    { name: "MARYLAND"	    ,           value: "MD"},
    { name: "MASSACHUSETTS"	,         value: "MA"},
    { name: "MICHIGAN"	    ,           value: "MI"},
    { name: "MINNESOTA"	    ,         value: "MN"},
    { name: "MISSISSIPPI"	  ,         value: "MS"},
    { name: "MISSOURI"	    ,           value: "MO"},
    { name: "MONTANA"	      ,         value: "MT"},
    { name: "NEBRASKA"	    ,           value: "NE"},
    { name: "NEVADA"	      ,           value: "NV"},
    { name: "NEW HAMPSHIRE"	,         value: "NH"},
    { name: "NEW JERSEY"	  ,           value: "NJ"},
    { name: "NEW MEXICO"	  ,           value: "NM"},
    { name: "NEW YORK"	    ,           value: "NY"},
    { name: "NORTH CAROLINA", 	        value: "NC"},
    { name: "NORTH DAKOTA"	,           value: "ND"},
    { name: "OHIO"	        ,           value: "OH"},
    { name: "OKLAHOMA"	    ,           value: "OK"},
    { name: "OREGON"	      ,           value: "OR"},
    { name: "PENNSYLVANIA"	,           value: "PA"},
    { name: "RHODE ISLAND"	,           value: "RI"},
    { name: "SOUTH CAROLINA", 	        value: "SC"},
    { name: "SOUTH DAKOTA"	,           value: "SD"},
    { name: "TENNESSEE"	    ,         value: "TN"},
    { name: "TEXAS"	        ,         value: "TX"},
    { name: "UTAH"	        ,           value: "UT"},
    { name: "VERMONT"	      ,         value: "VT"},
    { name: "VIRGINIA"	    ,           value: "VA"},
    { name: "WASHINGTON"	  ,           value: "WA"},
    { name: "WEST VIRGINIA"	,         value: "WV"},
    { name: "WISCONSIN"	    ,         value: "WI"},
    { name: "WYOMING"	      ,         value: "WY"}
  ];
  
  clickButton(): void 
  {
    for (var state of this.stateCodes) 
    {
      if(state.name === this.selectOption)
      {
        this.stateSelected = state.value;
      }
    }
    
    this.searchCity = true;
;
  }

  showCityState(): void 
  {
    this.geoLocationService.getGeoLocation(this.stateSelected,this.cityInput)
        .subscribe(data => this.geolocationObj = data);

    this.showCityResult = true;
  }

  assignLocationValues(): void 
  {
    for (var city of this.geolocationObj.data)
     {
      if(this.selectgeoLoaction === (city.name + ", " + this.stateSelected))
      {
        this.geoData.name = city.name;
        this.geoData.latitude = city.latitude;
        this.geoData.longitude = city.longitude;
        break;
      }
    }

    console.log("City,State: " + this.geoData.name + "," + this.stateSelected + " (Lat: " + this.geoData.latitude + ", Long: " + this.geoData.longitude + ")");
  }

}
