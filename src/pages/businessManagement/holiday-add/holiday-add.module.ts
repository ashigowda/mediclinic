import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { HolidayAdd } from './holiday-add';

@NgModule({
  declarations: [
    HolidayAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HolidayAdd)
  ],
  exports: [
    HolidayAdd
  ]
})

export class HolidayAddModule {
}