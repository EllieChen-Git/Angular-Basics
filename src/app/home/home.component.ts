import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 3;
  name: string = 'Enter here...';

  constructor() {}

  ngOnInit(): void {}

  countClick() {
    this.clickCounter++;
  }

  setClasses() {
    const myClasses = {
      active: this.clickCounter > 3,
      inactive: this.clickCounter <= 3
    };
    return myClasses;
  }
}
