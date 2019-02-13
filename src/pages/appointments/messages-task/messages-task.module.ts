import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { MessagesTask } from './messages-task';

@NgModule({
  declarations: [
    MessagesTask
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MessagesTask)
  ],
  exports: [
    MessagesTask
  ]
})

export class MessagesTaskPageModule {
}