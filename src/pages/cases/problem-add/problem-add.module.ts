import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { ProblemAdd } from './problem-add';

@NgModule({
  declarations: [
    ProblemAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProblemAdd)
  ],
  exports: [
    ProblemAdd
  ]
})

export class ProblemAddModule {
}