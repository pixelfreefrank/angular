import { AlertService } from "./../services/alert.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AlertComponent } from "./alert.component";

describe("AlertComponent", () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let service: AlertService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      providers: [AlertService]
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AlertService);
    fixture.detectChanges();
  });

  it("should create Alert Component", () => {
    expect(component).toBeTruthy();
  });

  it("should check for available alerts to display", () => {
    spyOn(service, "hasAlerts");
    component.ngOnInit();
    expect(service.hasAlerts).toHaveBeenCalled();
  });
});
