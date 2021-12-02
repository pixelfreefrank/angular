/**
 * Employee List Component - Master Component
 * Displays the employee list in a simple gridwith controls for update / delete.
 */

import { Alert } from "./../../shared/shared.model";
import { AlertService } from "./../../shared/services/alert.service";
import { Observable, Susbscription } from "rxjs";
import { EmployeeService } from "./../services/employee.service";
import { Employee } from "./../employee.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  /**
 * Employee Observable to maintain employee data
 */
  employees: Employee[];
  selectedEmployee: Employee = null;

  constructor() {}

  /**
     * On component initiation, get the initial employee list from the employee service.
     * If there was a change in employee data like create / update / delete , refresh the list.
  */
  ngOnInit(): void {}

  ngOnDestroy() {}

  /**
 * Get Initial employee listand update 'employee$' observable
 */
  getAllEmployees() {}

  /**
 * Update an employee by navigating to Employee Detail component
 * with a route parameters - employee id
 *
 */
  updateEmployee(employee: Employee, id: number) {}

  /**
 * Delete an employee - BONUS
 */
  deleteEmployee(employee: Employee, id: number) {}

  /**
 * Refresh the employee list data and update 'employee$' observable
 */
  refreshList(): void {}

  /**
 * Get the current list of alerts to display by using the alert service class observable 'currentAlert$'.
 */
  getAlerts() {}
}
