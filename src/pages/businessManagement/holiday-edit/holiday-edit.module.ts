import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { HolidayEdit } from './holiday-edit';

@NgModule({
  declarations: [
    HolidayEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HolidayEdit)
  ],
  exports: [
    HolidayEdit
  ]
})

export class HolidayEditModule {
}