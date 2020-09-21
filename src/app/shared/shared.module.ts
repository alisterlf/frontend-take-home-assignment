import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskIntegrationModule } from './ngx-mask-integration';

@NgModule({
  imports: [CommonModule, NgxMaskIntegrationModule],
  exports: [CommonModule, ReactiveFormsModule, FormsModule, NgxMaskIntegrationModule],
})
export class SharedModule {}
