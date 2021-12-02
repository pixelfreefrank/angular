import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { EmployeeDetailComponent } from "./employee/employee-detail/employee-detail.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "employees", pathMatch: "full"},
  { path: "login", component: LoginComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "employees/0", component: EmployeeDetailComponent },
  { path: "employees/:id", component: EmployeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
