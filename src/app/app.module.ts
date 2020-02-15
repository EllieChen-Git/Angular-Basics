import { CoursesService } from "./courses.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
//Step 2: Register with Module
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";

@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseComponent],
  imports: [BrowserModule],
  providers: [CoursesService], //register the dependencies
  bootstrap: [AppComponent]
})
export class AppModule {}
