import { CoursesService } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
// Tutorial 2
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
// Tutorial 2: In order for ngModel to work correctly, we need to import 'FormsModule'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule], // Add 'FormsModule'
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
