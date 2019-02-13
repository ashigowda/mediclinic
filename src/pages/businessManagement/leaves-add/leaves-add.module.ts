import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { LeavesAdd } from './leaves-add';

@NgModule({
  declarations: [
    LeavesAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LeavesAdd)
  ],
  exports: [
    LeavesAdd
  ]
})

export class LeavesAddModule {
}