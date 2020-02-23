import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  breweries: Object; // Create an object to hold data retrieved from API
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getBrewery().subscribe(data => {
      this.breweries = data;
      console.log(this.breweries);
    });
  }
  // getBrewery() as a service returns an observable, so we can subscribe to it within the component.
  // So that we can pass data to 'breweries'
}
