import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { HolidayList } from './holiday-list';

@NgModule({
  declarations: [
    HolidayList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HolidayList)
  ],
  exports: [
    HolidayList
  ]
})

export class HolidayListModule {
}