import { CoursesService } from "./courses.service";

//Step 1: Create a component

//import Component Declarator: to convert class into a component
import { Component } from "@angular/core";

@Component({
  //decoractor function
  selector: "courses",
  //CSS selector:
  //<courses> "courses"
  //<div class="courses"> ".courses"
  //<div id="courses"> "#courses"
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  ` //html markup for this component
  //*ngFor="": directive to manipulate the DOM
})

// Class naming convention: Pascal case
export class CoursesComponent {
  title = "List of Courses";
  courses;

  //dependency injection: create an instance of CoursesService and pass it to the constructor
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
