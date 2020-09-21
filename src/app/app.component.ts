import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from '@app/shared/validators/date.validator';
import { combineLatest, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { MonthPickerValue, Summary } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  summary$: Observable<Summary>;
  goalForm: FormGroup;
  dateMin: string;
  dateMax: string;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setMonthPickerMinAndMaxValues();
    this.buildForm();
  }
  private setMonthPickerMinAndMaxValues(): void {
    const initialValue = this.getMonthPickerInitialValue();
    this.dateMin = `${initialValue.year}-${initialValue.month}`;
    this.dateMax = `${+initialValue.year + 100}-12`;
  }
  private getMonthPickerInitialValue(): MonthPickerValue {
    const now = new Date();
    const year = now.getFullYear().toString();
    const currentMonth = now.getMonth() + 2;
    const month = currentMonth < 10 ? `0${currentMonth}` : `${currentMonth}`;
    return {
      year,
      month,
    };
  }
  private buildForm(): void {
    const initialValue = this.getMonthPickerInitialValue();
    this.goalForm = this.fb.group({
      amount: ['', [Validators.required]],
      deadline: [
        `${initialValue.year}-${initialValue.month}`,
        [Validators.required, DateValidator.min(this.dateMin), DateValidator.max(this.dateMax)],
      ],
    });
    this.bindForm();
  }
  private bindForm(): void {
    const $amount = this.goalForm.get('amount').valueChanges;
    const $deadline = this.goalForm.get('deadline').valueChanges;
    $amount.pipe(first()).subscribe(() => {
      const amountField = this.goalForm.get('deadline');
      amountField.setValue(amountField.value);
    });
    this.summary$ = combineLatest([$amount, $deadline]).pipe(
      map(([amount, deadline]: [string, string]) => {
        const timeZoneOffset = new Date().getTimezoneOffset() / 60;
        const splitedDeadline = deadline.split('-').map((dateFragment) => +dateFragment);
        return this.getSummary(+amount, new Date(Date.UTC(splitedDeadline[0], splitedDeadline[1] - 1, 1, timeZoneOffset, 0, 0)));
      })
    );
  }
  private getSummary(goalAmount: number, goalDeadline: Date): Summary {
    const remainingMonths = this.getRemainingMonths(goalDeadline);
    const monthlyAmount = goalAmount / remainingMonths;
    return {
      goalAmount,
      goalDeadline,
      monthlyAmount,
      remainingMonths,
    };
  }
  private getRemainingMonths(goalDeadline: Date): number {
    const now = new Date();
    const years = goalDeadline.getFullYear() - now.getFullYear();
    const months = years * 12 + (goalDeadline.getMonth() - now.getMonth());
    return months > 0 ? months : 1;
  }
  skipMonth(amount: number): void {
    const deadlineField = this.goalForm.get('deadline');
    const currentDate = new Date(deadlineField.value);
    const timeZoneOffset = new Date().getTimezoneOffset() / 60;
    const newDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth() + 1 + amount, 1, timeZoneOffset, 0, 0));
    const newMonth = newDate.getMonth() + 1;
    const formatedNewMonth = newMonth < 10 ? `0${newMonth}` : `${newMonth}`;
    deadlineField.setValue(`${newDate.getFullYear()}-${formatedNewMonth}`);
  }
  submitGoal(): void {
    if (this.goalForm.valid) {
      console.log('done');
    }
  }
}
