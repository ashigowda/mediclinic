import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { LeavesEdit } from './leaves-edit';

@NgModule({
  declarations: [
    LeavesEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LeavesEdit)
  ],
  exports: [
    LeavesEdit
  ]
})

export class LeavesEditModule {
}