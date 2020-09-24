import { NgModule } from '@angular/core';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {
  thousandSeparator: ',',
};

@NgModule({
  imports: [NgxMaskModule.forRoot(options)],
  exports: [NgxMaskModule],
})
export class NgxMaskIntegrationModule {}
