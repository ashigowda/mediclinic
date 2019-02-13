import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { PrescriptionHistory } from './prescription-history';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    PrescriptionHistory
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PrescriptionHistory),PipesModule
  ],
  exports: [
    PrescriptionHistory
  ]
})

export class PrescriptionHistoryModule {
}