import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { TaskAdd } from './task-add';

@NgModule({
  declarations: [
    TaskAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TaskAdd)
  ],
  exports: [
    TaskAdd
  ]
})

export class TaskAddModule {
}