import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // create an instance of HttpClient through dependency injection
  constructor(private http: HttpClient) {}

  myMethod() {
    console.log('Hey, whats up?');
  }

  // create a method that returns the response from the API
  getBrewery() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
