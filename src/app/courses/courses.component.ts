import { CoursesService } from './courses.service';

// (1) Import 'Component'
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  // CSS selector:
  // <app-courses> "app-courses"
  // <div class="app-courses"> ".app-courses"
  // <div id="app-courses"> "#app-courses"
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `

  // html markup for this component
  // *ngFor="": directive to manipulate the DOM
})

// Class naming convention: Pascal case
export class CoursesComponent {
  title = 'List of Courses';
  courses;

  // dependency injection: create an instance of CoursesService and pass it to the constructor
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
