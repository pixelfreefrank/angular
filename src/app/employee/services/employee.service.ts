import { Employee } from "./../employee.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { shareReplay, map } from "rxjs/operators";

const baseURL = "http://localhost:3000/employees";
@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {}

  getByID(id: number): Observable<Employee> {}

  create(employee: Employee): Observable<any> {}

  update(id: number, employee: any) {}

  deleteByID(id: number) {}
}
