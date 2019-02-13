import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { WorkingStatus } from './working-status';

@NgModule({
  declarations: [
    WorkingStatus
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WorkingStatus)
  ],
  exports: [
    WorkingStatus
  ]
})

export class WorkingStatusModule {
}