import { Component, forwardRef, Injector, Input, ViewChild } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrls: ['./month-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonthPickerComponent),
      multi: true,
    },
  ],
})
export class MonthPickerComponent {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;

  @Input()
  min: string;

  @Input()
  max: string;

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;

  get control(): AbstractControl {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  constructor(private injector: Injector) {}

  get controlContainer(): ControlContainer {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  skipMonth(amount: number): void {
    const currentDate = new Date(this.control.value);
    const timeZoneOffset = new Date().getTimezoneOffset() / 60;
    const newDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth() + 1 + amount, 1, timeZoneOffset, 0, 0));
    const newMonth = newDate.getMonth() + 1;
    const formatedNewMonth = newMonth < 10 ? `0${newMonth}` : `${newMonth}`;
    this.control.setValue(`${newDate.getFullYear()}-${formatedNewMonth}`);
  }
}
