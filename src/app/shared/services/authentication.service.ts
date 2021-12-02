import { BehaviorSubject } from "rxjs";
import { User } from "./../shared.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private _validUsers: User[] = [
    { userName: "cognizant", password: "love2code" },
    { userName: "cts", password: "fun" },
    { userName: "hello", password: "world" }
  ];

  constructor() {}

  /**
 * returns a boolean
 */
  login(User: User) {}

  logout() {}

  isLoggedIn() {}
}
