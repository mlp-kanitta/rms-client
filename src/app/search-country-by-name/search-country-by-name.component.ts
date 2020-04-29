import { ViewDetailCountryComponent } from '../view-detail-country/view-detail-country.component';
import { Observable } from "rxjs";
import { CountryService } from "../country.service";
import { Country } from "../country";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';

@Component({
  selector: 'app-search-country-by-name',
  templateUrl: './search-country-by-name.component.html',
  styleUrls: ['./search-country-by-name.component.css']
})
export class SearchCountryByNameComponent implements OnInit {
	countries : Array<object[]> = [];
	keyword : string;
	
	constructor(private countryService: CountryService,
    private router: Router) {}

	ngOnInit() {
		this.displayAll();
	}

  displayAll() {
	  this.countryService.getCountryList()
						.subscribe((data: Array<object[]>) => {
							this.countries = data;
						},
						 error => console.log('oops', error)
						);
  }
  
   searchCountry(keyword: string){
	  if(keyword){
	  this.countryService.getCountryByName(keyword)
						.subscribe((data: Array<object[]>) => {
							this.countries = data;
						},
						 error => {
							 this.countries = []
							 //console.log('Error', error)
						 }
						); 
	  }else{
		  this.displayAll();
	  }
  }
}