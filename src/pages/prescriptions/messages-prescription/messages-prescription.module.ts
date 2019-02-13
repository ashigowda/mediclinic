import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { MessagesPrescription } from './messages-prescription';

@NgModule({
  declarations: [
    MessagesPrescription
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MessagesPrescription)
  ],
  exports: [
    MessagesPrescription
  ]
})

export class MessagesPrescriptionPageModule {
}