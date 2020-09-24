import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthPickerComponent } from './month-picker/month-picker.component';
import { NgxMaskIntegrationModule } from './ngx-mask-integration';

@NgModule({
  imports: [CommonModule, NgxMaskIntegrationModule, ReactiveFormsModule, FormsModule],
  exports: [CommonModule, ReactiveFormsModule, FormsModule, NgxMaskIntegrationModule, MonthPickerComponent],
  declarations: [MonthPickerComponent],
})
export class SharedModule {}
