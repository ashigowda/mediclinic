import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { WorkingHoursEdit } from './workingHours-edit';

@NgModule({
  declarations: [
    WorkingHoursEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WorkingHoursEdit)
  ],
  exports: [
    WorkingHoursEdit
  ]
})

export class WorkingHoursEditModule {
}