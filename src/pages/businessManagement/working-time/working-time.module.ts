import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { WorkingTime } from './working-time';

@NgModule({
  declarations: [
    WorkingTime
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WorkingTime)
  ],
  exports: [
    WorkingTime
  ]
})

export class WorkingTimeModule {
}