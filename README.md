# Angular Evaluation Code Base Solution

## Evaluation Instructions
The candidate is expected to complete the following tasks to improve / optimize the app in 'master' branch to the optimized / completed app in this ('solution') branch.
NOTE - There may be multiple ways to complete the following tasks. This branch provides one of the best solutions. Please make sure to talkthrough the pair programming phase to identify the candidate's thought process in reaching to his/her solution.

### Tasks 
- Replace duplicate template logic for create and update employee into one reuseable component 'EmployeeDetailComponent'.
- Create a shared service - AlertService to display alerts in 'EmployeeListComponent' only - Sibling Component Interaction
- Optimize API calls 
  - avoid duplicate / unnecessary API calls - using shareReplay (rxjs operator) and refreshing employee list only if there is a change.
  - using asynchronous objects like BehaviorSubject or Observables wherever necessary and unsubscribe on ngOnDestroy
- Implement Login feature and shared Authentication service 
  - create login component - LoginComponent
  - create authentication service - AuthenticationService that uses localStorage
  - create a route guard - AuthGuard to restrict routes if the user is not logged in 
- To evaluate TDD - Test Driven Development
  - develop unit tests for AlertComponent - refer to spec file

### Bonus
- Implement Delete functionality:
  - add a delete button next to update button in employee list grid.
  - add required handler and hook the http call 
  - display alert for successful deletion or error


## Running the Application
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

### Install dependencies

Run `npm install` to install the dependencies in node_modules

### Start Fake JSON REST server

Run `npm start`to start the Fake JSON server.
Run `npm generate` to generate new set of fake data


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
