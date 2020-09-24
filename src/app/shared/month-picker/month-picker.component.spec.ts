import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthPickerComponent } from './month-picker.component';

describe('MonthPickerComponent', () => {
  let component: MonthPickerComponent;
  let fixture: ComponentFixture<MonthPickerComponent>;

  const fg: FormGroup = new FormGroup({
    date: new FormControl(''),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [MonthPickerComponent],
      providers: [{ provide: ControlContainer, useValue: fg }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPickerComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should jump on month forward with padleft', () => {
    spyOn(Date.prototype, 'getMonth').and.returnValue(1);
    spyOn(Date.prototype, 'getFullYear').and.returnValue(2020);

    component.skipMonth(1);

    expect(component.control.value).toBe('2020-02');
  });

  it('should jump on month forward', () => {
    spyOn(Date.prototype, 'getMonth').and.returnValue(10);
    spyOn(Date.prototype, 'getFullYear').and.returnValue(2020);

    component.skipMonth(1);

    expect(component.control.value).toBe('2020-11');
  });
});
