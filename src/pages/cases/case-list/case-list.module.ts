import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { CaseList } from './case-list';

@NgModule({
  declarations: [
    CaseList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CaseList)
  ],
  exports: [
    CaseList
  ]
})

export class CaseListModule {
}