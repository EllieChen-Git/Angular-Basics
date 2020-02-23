# Angular Basics

##### Tutorials I followed:

1. [Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh](https://www.youtube.com/watch?v=k5E2AVpwsko)

2. [Video: Learn Angular 8 from Scratch for Beginners - Crash Course | DesignCourse](https://www.youtube.com/watch?v=_TLhUCjY9iA)

3. [Article: Learn Angular 8 from Scratch for Beginners - Crash Course | DesignCourse](https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course)

---

### Angular App Structure

- **e2e**: where we write end-to-end test for our app (automated tests to simulate real users)

- **src\assets**: where we store static assets for our app (e.g. images, text files)

- **src\index.html**: app-root

- **src\environments**: where we store configuration settings for different environment\

  1. **environment.prod.ts**: production environment
  2. **environment.ts**: development environment

- **src\main.ts**: starting point of our app

- **src\polyfills.ts**: fill the gap between the JS features that Angular needs and the JS features that currently supported by the browsers

- **src\test.ts**: setting our test environment

- **src\app\app.component.ts**: business logic - **src\app\app.component.html**: view

- **src\app\app.module.ts**

- **.editorconfig**: make sure all the devs use the same editor setting

- **karma.conf.js**: karma is a test runner for JS code

- **tsconfig.json**: where you change settings for your typescript compiler

---

## Angular Basics

### Components

- **Components**: data + HTML template + view/presentation logic

**Manually Create a Component**

1. Create a Component

- Selector: should be kebab-cased (lower case) and include a dash '-'
- Class: should be Pascal case

src\app\courses.component.ts

```typescript
// (1) Import 'Component'
import { Component } from '@angular/core';

// (2) Component decorator: properties for your component
@Component({
  selector: 'app-courses', // Selector format
  templateUrl: './courses.component.html', // Location of template
  styleUrls: ['./courses.component.scss'] // Location of styles
  //CSS selector:
  //<app-courses> "app-courses"
  //<div class="app-courses"> ".app-courses"
  //<div id="app-courses"> "#app-courses"
})

// (3) Component logic (Class naming convention)
export class CoursesComponent {}
```

2. Register it in a module

src\app\app.module.ts

```typescript
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent]
})
export class AppModule {}
```

3. Add an element in an HTML markup

src\app\app.component.html

```typescript
<h1>Angular</h1>

<app-courses></app-courses>
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

---

**Routing**

1. routerLink (how we link different pages to app): We use 'routerLink' instead of 'href'

src\app\app.component.html

```typescript
<nav>
  <ul>
    <li>
      <a href="#" routerLink="/">
        Home
      </a>
    </li>
    <li>
      <a href="#" routerLink="/list">
        List
      </a>
    </li>
  </ul>
</nav>
```

src\app\app-routing.module.ts

```typescript
//Import the components
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

// Each route is an obj in the Routes array
const routes: Routes = [
  { path: '', component: HomeComponent }, // '': home component will load by default when the app loads.
  { path: 'list', component: ListComponent }
];
```

---

**One-way Data Binding (Event)**

- The template is retrieving the clickCounter property from the component. Then, if you click on the span element, it is communicating data from the template to the component!
- Angular event binding: https://angular.io/guide/template-syntax#event-binding
- Angular user input: https://angular.io/guide/user-input

src\app\home\home.component.html

```typescript
  <p>
    You've click <button (click)="countClick()">this</button>
    {{ clickCounter }} times
  </p>

// (1)
// click (click event): target of the binding
// countClick(): template statement, which responds to the click event by calling the component's countClick method.
// (2)
// clickCounter: a property that will display data retrieved from the component
```

src\app\home\home.component.ts

```typescript
export class HomeComponent implements OnInit {
  clickCounter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  countClick() {
    this.clickCounter++;
  }
}
```

**Two-way Data Binding (Event and Property)**

- Both setting and retrieving the property to and from the component/template

src\app\home\home.component.html

```typescript
  <p>
    Please enter your name: <input type="text" [(ngModel)]="name" /><br />
    Hi <strong> {{ name }}</strong>
  </p>
```

src\app\app.module.ts

```typescript
// In order for ngModel to work correctly, we need to import 'FormsModule'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule], // Add 'FormsModule'
})

```

src\app\home\home.component.ts

```typescript
export class HomeComponent implements OnInit {
  name: string = '';
}
```

---

**NG Template: If/Else Statement**

src\app\home\home.component.html

```typescript
<div class="play-container">
  // we use property binding [ngIf] and bind it to an expression clickCounter > 4.
  <ng-template [ngIf]="clickCounter > 3" [ngIfElse]="none">
  // If the express in [ngIf] is true, it will show the HTML within the initial ng-template block
    <p>
      The click counter is GREATER than 3.
    </p>
  </ng-template>
  <ng-template #none>
  // If expression isn't true, it will call the template 'none' with ngIfElse.
    <p>
      The click counter is not greater than 3.
    </p></ng-template
  >
</div>

// shorthand syntax with 'ngIf': *ngIf
<div class="play-container">
  <p *ngIf="clickCounter > 3">
    The click counter is GREATER than 3.
  </p>
</div>
```

---

**Style Binding**

```typescript
// inline style binding: [style. + CSS property]="expression(ternary operator)"
<div
  class="play-container"
  [style.background-color]="clickCounter > 3 ? 'lightyellow' : 'lightblue'"
>

// multi-line inline style binding
<div
  class="play-container"
  [ngStyle]="{
    'background-color': clickCounter > 3 ? 'lightyellow' : 'lightblue',
    'border': clickCounter > 3 ? '4px solid black' : 'none'
  }"
>
```

**Class Binding**

- [class.className]

src\app\home\home.component.html

```typescript
<div class="play-container" [class.active]="clickCounter > 3">
```

src\app\home\home.component.scss

```scss
.active {
  background-color: yellow;
  border: 4px solid black;
}
```

- [ngClass]

src\app\home\home.component.html

```typescript
<div class="play-container" [ngClass]="setClasses()">
```

src\app\home\home.component.ts

```typescript
export class HomeComponent implements OnInit {
  setClasses() {
    const myClasses = {
      active: this.clickCounter > 3,
      inactive: this.clickCounter <= 3
    };
    return myClasses;
  }
}
```

src\app\home\home.component.scss

```css
.inactive {
  background-color: lightgray;
}
```

---

**How to make a loop with Angular**

courses.component.ts

```typescript
@Component({
  selector: 'app-courses',
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
  title = 'List of Courses';
  courses = ['course1', 'course2', 'course3'];
}
```

---

### Modules

- **Modules**: a container/group of related components.

Modules help organize an application into cohesive functionality blocks by wrapping components, pipes, directives, and services.

- **root module** (AppModule)

Typically, you map major functionality or a feature to a module.

---

### Services

- **Service**: Implement the business logic.

**Manually Create a Service**

1. courses.service.ts

```typescript
export class CoursesService {
  getCourses() {
    return ['course1', 'course2', 'course3'];
  }
}
```

2. courses.component.ts

```typescript
export class CoursesComponent {
  title = 'List of Courses';
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
import { CoursesService } from './courses.service';

@NgModule({
  providers: [CoursesService] //register the dependencies
})
export class AppModule {}
```

---

**Create a Service Using Angular CLI**

```javascript
ng g s http

//Files below will be generated
CREATE src/app/http.service.spec.ts (352 bytes)
CREATE src/app/http.service.ts (134 bytes)
```

src\app\http\http.service.ts

```typescript
export class HttpService {
  constructor() {}

  myMethod() {
    console.log('Hey, whats up?');
  }
}
```

src\app\list\list.component.ts

```typescript
import { HttpService } from './../http/http.service';

export class ListComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.myMethod();
  } // ngOnInit(): lifecycle hook that is fired when the component loads.
  // i.e. run our methods from the service when the component loads.
  // If click to the list link, you'll see output in console (inspect)
}
```

**Use Public API with our Service**

src\app\http\http.service.ts

```typescript
import { HttpClient } from '@angular/common/http';
// Need to import HTTP client within our http service to communicate with a public API

export class HttpService {
  // create an instance of HttpClient through dependency injection
  constructor(private http: HttpClient) {}

  // create a method that returns the response from the API
  getBrewery() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
```

src\app\app.module.ts

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule]
})
export class AppModule {}
```

src\app\list\list.component.ts

```typescript
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
}
```

src\app\list\list.component.html

```typescript
<h1>Breweries</h1>

<ul *ngIf="breweries"> // *ngIf="breweries": if breweries exist (to prevent error. If no data assigned to breweries, app would break)
  <li *ngFor="let brew of breweries"> // iterate through the array of objects with *ngFor.
    <p class="name">{{ brew.name }}</p>
    <p class="country">{{ brew.country }}</p>
    <a class="site" href="{{ brew.website_url }}">site</a>
  </li>
</ul>
```

---
