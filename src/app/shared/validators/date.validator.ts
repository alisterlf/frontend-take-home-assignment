import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class DateValidator {
  static min(date: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const inputDate: Date = new Date(control.value);
      const minDate: Date = new Date(date);
      if (minDate <= inputDate) {
        return null;
      } else {
        const timezoneOffset = minDate.getTimezoneOffset() / 60;
        const minDateWithTimezone = new Date(Date.UTC(minDate.getFullYear(), minDate.getMonth() + 1, 1, timezoneOffset, 0, 0));
        return { minDate: { min: minDateWithTimezone, actual: inputDate } };
      }
    };
  }
  static max(date: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const inputDate: Date = new Date(control.value);
      const maxDate: Date = new Date(date);
      if (maxDate >= inputDate) {
        return null;
      } else {
        const timezoneOffset = maxDate.getTimezoneOffset() / 60;
        const maxDateWithTimezone = new Date(Date.UTC(maxDate.getFullYear(), maxDate.getMonth() + 1, 1, timezoneOffset, 0, 0));
        return { maxDate: { max: maxDateWithTimezone, actual: inputDate } };
      }
    };
  }
}
