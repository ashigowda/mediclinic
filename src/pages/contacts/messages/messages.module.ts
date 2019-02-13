import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { Messages } from './messages';

@NgModule({
  declarations: [
    Messages
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Messages)
  ],
  exports: [
    Messages
  ]
})

export class MessagesPageModule {
}