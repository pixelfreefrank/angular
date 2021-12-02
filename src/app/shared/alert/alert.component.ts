import { AlertService } from "./../services/alert.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {}
}
