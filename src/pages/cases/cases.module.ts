import { NgModule } from '@angular/core';
import { CaseListModule } from './case-list/case-list.module';
import { CarePlanModule } from './care-plan/care-plan.module';
import { ProblemAddModule } from './problem-add/problem-add.module';
import { GoalAddModule } from './goal-add/goal-add.module';
import { TaskAddModule } from './task-add/task-add.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CaseListModule,CarePlanModule,ProblemAddModule,GoalAddModule,TaskAddModule
  ],
})
export class CasesModule { }