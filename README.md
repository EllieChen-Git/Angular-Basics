# Angular Bacics

##### Tutorial I followed: [Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh](https://www.youtube.com/watch?v=k5E2AVpwsko)

---

### Angular App Structure

- e2e: where we write end-to-end test for our app (automated tests to simulate real users)

- assests: where we store static assets for our app (e.g. images, text files)

- environments: where we store configuration settings for different environment\

  1. environment.prod.ts: production environment
  2. environment.ts: development environment

- main.ts: starting point of our app

- polyfills.ts: fill the gap between the JS features that Angular needs and the JS features that currently supported by the browswers

- test.ts: setting our test environment

- .editorconfig: make sure all the devs use the same editor setting

- karma.conf.js: karma is a test runner for JS code

- tsconfig.json: where you change settings for your typescript compiler

---

## Angular Basics

### Components

- Components: data + HTML template + view/presentation logic

- Naming convention: lower case, separated by hyphen '-' if multiple words.

**Manually Create a Component**

1. Create a Component

src\app\courses.component.ts

```typescript
//Step 1: Create a component

//import Component Declarator: to convert class into a component
import { Component } from "@angular/core";

@Component({
  //declarator function
  selector: "courses",
  //CSS selector:
  //<courses> "courses"
  //<div class="courses"> ".courses"
  //<div id="courses"> "#courses"
  template: "<h2>Courses</h2>" //html markup for this component
})

// Class naming convention: Pascal case
export class CoursesComponent {}
```

2. Register it in a module

src\app\app.module.ts

```typescript
//Step 2: Register with Module
import { CoursesComponent } from "./courses.component";

@NgModule({
  declarations: [AppComponent, CoursesComponent]
})
export class AppModule {}
```

3. Add an element in an HTML markup

src\app\app.component.html

```typescript
<h1>Angular</h1>

<courses></courses>
```

**Create a Component Using Angular CLI**

```javascript
ng g c course


//Files below will be generated
CREATE src/app/course/course.component.css (0 bytes)
CREATE src/app/course/course.component.html (21 bytes)
CREATE src/app/course/course.component.spec.ts (628 bytes)
CREATE src/app/course/course.component.ts (275 bytes)
UPDATE src/app/app.component.ts
```

**How to make a loop with Angular**

courses.component.ts

```typescript
@Component({
  selector: "courses",
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
  //*ngFor="": directive to manipulate the DOM
})
export class CoursesComponent {
  title = "List of Courses";
  courses = ["course1", "course2", "course3"];
}
```

---

### Modules

- Modules: a container/group of related components.

---

### Services

- Service: Implement the business logic.

**Manually Create a Service**

1. courses.service.ts

```typescript
export class CoursesService {
  getCourses() {
    return ["course1", "course2", "course3"];
  }
}
```

2. courses.component.ts

```typescript
export class CoursesComponent {
  title = "List of Courses";
  courses;

  //dependency injection: create an instance of CoursesService and pass it to the constructor
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
```

3. app.module.ts

```typescript
import { CoursesService } from "./courses.service";

@NgModule({
  providers: [CoursesService] //register the dependencies
})
export class AppModule {}
```

**Create a Service Using Angular CLI**

```javascript
ng g s email

//Files below will be generated
CREATE src/app/email.service.spec.ts (352 bytes)
CREATE src/app/email.service.ts (134 bytes)
```

---

## Angular Commands

##### To start a dev server

```
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

##### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

##### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

##### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

##### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
