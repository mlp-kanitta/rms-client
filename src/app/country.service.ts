import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
	
	private baseUrl = 'https://restcountries.eu/rest/v2';

	constructor(private http: HttpClient) { }
	
	getCountryList(){
		return this.http.get(`${this.baseUrl}/all`)
	}
  
	getCountryByName(name){
		name = this.encode(name)
		return this.http.get(`${this.baseUrl}/name/${name}`)
	}
	
	encode(name) : string {
		let returnName = name

		returnName = returnName.replace(' ', '%20')

		return returnName
	  }
}
