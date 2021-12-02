## Explanation

### Master - Detail Design Pattern - Employee Problem Statement

Develop an angular / react application that uses 'Master-Detail Design Pattern'

![](assets/cde-fe-problem.PNG)

### EmployeeGrid Application - Stories

1. The user must be able to login to the application using the correct user id and password.
2. Once logged in, the user must stay logged in, till he clicks 'Logout'.
3. The user must be able to view all the employees in 'EmployeeGrid' application after logging in.
4. The user can create new employees.
5. The user can update existing employee.
6. The user can delete an employee.
7. The user should be displayed a message when he creates, updates or deletes an employee from the application.
8. The user should be logged out of the application, on clicking 'logout'

### **Evaluation Criteria**

The Front-End Developer is expected to have expertise in the following areas:

1. HTML/CSS - Semantic code and styling techniques
2. Javascript - Scripting language
3. Responsive Web Design
4. Testing/Debugging
5. Reusable components
6. Frameworks
7. Browser Developer Tools
8. Web Performance

#### 1. HTML/CSS

##### HTML

The candidate must be able to use sematic HTML. Ex. Use of 'strong' tag and 'em' tag, instead of 'b' and 'i'.
Example:
<strong><em>Correct HTML Semantics</em></strong>
<b><i>Wrong HTML Semantics</i></b>

##### CSS / SCSS

Use of CSS / SCSS framework. The EmployeeGrid app has been developed using the bootstrap CSS / SCSS framework. Candidate should be able to use the 'Link' tag
and link the bootstrap framework for use in the application.

Must be able to use flex and grid model for arranging elements in a page.

#### 2. Javascript

Must demonstrate working with callbacks, promises, async + await and working with arrays (map & filter).

#### 3. Responsive Web Design

Should be able to make the app fully responsive - web, tablet and mobile.

#### 4. Testing/Debugging

Should be able to understand why there is a error in the console/browser and debug the same.

The candidate should be able to write test cases for at least one component that has been developed.

#### 5. Reusable Components/Code Reuse

Evaluate the thought process of the candidate in removing redundant logic and creating reusble pieces of code.
For Example:

- Combine similar templates to create a reusable component
  'EmployeeCreate' and 'EmployeeDetail' components have similar templates, Combining the templates into a single component 'EmployeeDetail' that handles the logic behind both the components.
- Combine similar code blocks to create a method in a shared service
  The code used to fetch data or create common components like alerts can be placed in a shared service 'AlertService' that can be reused by multiple components as dependency.

#### 6. Frontend Framework / Library ( Angular / React)

Currently, the app is available in Angular and React. Must be able to use on of these framework/library to achieve the expected output.

##### State Management

Evaluate the ability of the candidate to manage application state and maintain sessions by using appropriate libraries and standards.
For Example:

- Creating Login service that uses 'localStorage' to maintain user state for user authentication in a simple way.
- Using external libraries like 'ngRx Store' in Angular to implement detailed state management.

#### 7. Browser Developer Tools

Browser developer tools helps a developer debug the issue faster. Should be able to use the developer tools from any of the well known browsers and fix issues.

#### 8. Performance Optimization / Web Performance

Evaluate the ability of the candidate to develop an optimal application by following the most common development standards of the industry as mentioned below:

- Avoid duplicate or unwanted API calls
  For Example: use appropriate operators (shareReplay from 'rxjs') to avoid duplicate API calls and making conditional API calls only when there is an expected change (Create/Update/Delete) in the data.
- Optimal Garbage Collection
  For Example: use appropriate garbage collection hooks to unsubscribe from asynchronous objects (ngOnDestroy in Angular), so that the memory is cleaned on time and maintains space complexity.
- Optimal Routing strategies
  For Example: implement route guards to restrict user access based on authentication or specific conditions. We can also implement lazy loading using feature modules and child route strategies as the application scales.
- Quality Gate
  For Example: Coding standards like linting, naming conventions for variables based on web standards (ES6 standards).
  This also includes code coverage in unit test to be minimum of >=70 %

### TDD

#### Red, Green, Refactor

- Red
  - The test MUST fail. Some people would consider the compiler throwing you an error to be a red stage, but for true pure TDD, an assertion error is the red stage.
  - Red is the stage we want to make sure we know we are testing something, and not just getting a false positive. We do not want to write implementation code knowing that it will pass the test no matter what.
- Green
  - Green indicates, if the red stage is properly done, that we have made a test pass. We can either write a new test, or head over to the refactor stage.
- Refactor
  - If all your tests are passing, you are able to refactor your code with the insurance that you have not broken any functionality, provided you constantly get passing tests while doing so. In some cases, you might need to fix some tests, because the tests might have not been properly written.
