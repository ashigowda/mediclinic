import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { WorkingHoursAdd } from './working-hours-add';

@NgModule({
  declarations: [
    WorkingHoursAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WorkingHoursAdd)
  ],
  exports: [
    WorkingHoursAdd
  ]
})

export class WorkingHoursAddModule {
}