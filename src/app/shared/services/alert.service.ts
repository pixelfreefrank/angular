import { Alert } from "./../shared.model";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  alerts: Alert[] = [];
  private _alerts = new BehaviorSubject<Alert[]>([]);
  currentAlerts$ = this._alerts.asObservable();

  constructor() {}

  /**
 * Returns a boolean
 */
  hasAlerts() {}

  createAlert(alertType: "danger" | "success", message: string) {}

  dismissAlert() {}
}
