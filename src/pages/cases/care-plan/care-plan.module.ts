import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { CarePlan } from './care-plan';

@NgModule({
  declarations: [
    CarePlan
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CarePlan)
  ],
  exports: [
    CarePlan
  ]
})

export class CarePlanModule {
}