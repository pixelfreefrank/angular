import { AlertService } from "./../../shared/services/alert.service";
import { Employee } from "./../employee.model";
import { EmployeeService } from "./../services/employee.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.scss"]
})
export class EmployeeDetailComponent implements OnInit {
  /**
   *Create / Update Employee
   */
  employee: Employee = {
    firstName: "",
    lastName: "",
    city: "",
    zipCode: "",
    grade: ""
  };

  formSubmitted: boolean = false;
  isUpdate = false;

  constructor() {}

  /**
 * On Component initiation, parse the route params
 * If there is 'id' then it is an update request ,fetch the employee details by id.
 */
  ngOnInit(): void {}

  ngOnDestroy() {}

  /**
 * Get an employee by id using 'getByID' method of employee service.
 */
  getEmployee(id: number) {}

  /**
 * Form submission handler
 * Based on 'isUpdate' flag , call 'create' or 'update' method of employee service.
 */
  submitEmployee() {}

  /**
 * Create new employee from submitted form data using employee service method 'update'
 */
  createEmployee() {}

  /**
 * Update employee from submiited form data based on id using employee service method 'update'
 */
  updateEmployee() {}
}
