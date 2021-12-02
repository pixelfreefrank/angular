import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, UrlTree } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  /**
 * Route guard implementation to restrict access of routes when the user is not logged in.
 * and redirect to '/login'
 */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {}
}
