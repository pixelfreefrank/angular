import { AlertService } from "./../shared/services/alert.service";
import { Component, OnInit } from "@angular/core";
import { User, Alert } from "../shared/shared.model";
import { AuthenticationService } from "../shared/services/authentication.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: User;
  alerts: Alert[];

  constructor() {}

  ngOnInit(): void {}

  /**
 * login the user if the username and password exist in the AuthenticationService
 * display appropriate alerts using AlertService
 * navigate to EmployeeList component on successful login
 */
  login() {}

  /**
 * gets the current alerts to displayed in this Component
 * In this case, the login alerts for success and authentication.
 */
  getAlerts() {}
}
