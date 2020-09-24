import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
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
    const nextMonth = now.getMonth() + 2;
    const month = nextMonth < 10 ? `0${nextMonth}` : `${nextMonth}`;
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
    return months;
  }

  submitGoal(): void {
    if (this.goalForm.valid) {
      console.log('Done!');
    }
  }
}
