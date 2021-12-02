import { TestBed } from "@angular/core/testing";

import { AlertService } from "./alert.service";

describe("AlertService", () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should create alert ", () => {
    service.createAlert("success", "Test success alert");
    expect(service.alerts.length).toBeGreaterThan(0);
  });

  it("should dismiss alert ", () => {
    service.dismissAlert();
    expect(service.alerts.length).toBe(0);
  });
});
