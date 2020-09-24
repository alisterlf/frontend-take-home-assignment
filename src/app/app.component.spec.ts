import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should define mac on init with the next month', () => {
    spyOn(Date.prototype, 'getMonth').and.returnValue(10);
    spyOn(Date.prototype, 'getFullYear').and.returnValue(2020);
    const expectedDate = `2020-12`;

    component.ngOnInit();

    expect(component.dateMin).toBe(expectedDate);
  });

  it('should define mac on init with the next month with padleft', () => {
    spyOn(Date.prototype, 'getMonth').and.returnValue(1);
    spyOn(Date.prototype, 'getFullYear').and.returnValue(2020);
    const expectedDate = `2020-03`;

    component.ngOnInit();

    expect(component.dateMin).toBe(expectedDate);
  });

  it('should define min on init with december of 100 years from now', () => {
    spyOn(Date.prototype, 'getMonth').and.returnValue(1);
    spyOn(Date.prototype, 'getFullYear').and.returnValue(2020);
    const expectedDate = `2120-12`;

    component.ngOnInit();

    expect(component.dateMax).toBe(expectedDate);
  });

  it('should set the form as valid after the amount field is filled', () => {
    component.ngOnInit();
    component.goalForm.get('deadline').disable();
    component.goalForm.get('amount').setValue(100);
    component.submitGoal();

    expect(component.goalForm.valid).toBeTruthy();
  });

  it('should set the deadline field to invalid after ser to a past date', () => {
    const pastDate = '2020-01';

    component.ngOnInit();
    component.goalForm.get('deadline').setValue(pastDate);
    component.submitGoal();

    expect(component.goalForm.get('deadline').invalid).toBeTruthy();
  });

  it('should set the deadline field to invalid after ser to more than 100 years in the future', () => {
    spyOn(Date.prototype, 'getFullYear').and.returnValue(2020);
    const pastDate = '2220-01';

    component.ngOnInit();
    component.goalForm.get('deadline').setValue(pastDate);

    expect(component.goalForm.get('deadline').invalid).toBeTruthy();
  });

  it('should return a summary for the goal after the amount field is filled', () => {
    const amountValue = 100;
    const expectedValue = 100;

    component.ngOnInit();
    let monthlyAmount: number;
    component.summary$.subscribe((summary) => {
      monthlyAmount = summary.monthlyAmount;
    });
    component.goalForm.get('amount').setValue(amountValue);

    expect(monthlyAmount).toBe(expectedValue);
  });
});
