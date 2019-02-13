import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { GoalAdd } from './goal-add';

@NgModule({
  declarations: [
    GoalAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GoalAdd)
  ],
  exports: [
    GoalAdd
  ]
})

export class GoalAddModule {
}