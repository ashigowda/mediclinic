import { NgModule } from '@angular/core';
import { clinicSettingsModule } from "./clinic-settings/clinic-settings.module";
import { businessManagementModule } from "./business-management/business-management.module";
import { clinicSettingsEditModule } from "./clinic-settings-edit/clinic-settings-edit.module";
import { staffAddModule } from "./staff-add/staff-add.module";
import { staffDetailsModule } from "./staff-Details/staff-Details.module";
import { StaffListModule } from "./staff-list/staff-list.module";
import { staffEditModule } from "./staff-edit/staff-edit.module";
import { openinghoursAddModule } from './openingHours-add/openingHours-add.module';
import { openinghoursEditModule } from './openinghours-edit/openinghours-edit.module';
import { openingHoursListModule } from './openingHours-list/openingHours-list.module';
import { WorkingTimeModule } from './working-time/working-time.module';
import { HolidayListModule } from './holiday-list/holiday-list.module';
import { WorkingStatusModule } from './working-status/working-status.module';
import { LeavesAddModule } from './leaves-add/leaves-add.module';
import { WorkingHoursAddModule } from './working-hours-add/working-hours-add.module';
import { WorkingHoursEditModule } from './workingHours-edit/workingHours-edit.module';
import { HolidayAddModule } from './holiday-add/holiday-add.module';
import { LeavesEditModule } from './leaves-edit/leaves-edit.module';
import { HolidayEditModule } from './holiday-edit/holiday-edit.module';

@NgModule({
    declarations: [

    ],
    imports: [
        clinicSettingsModule, businessManagementModule,
        clinicSettingsEditModule, staffAddModule,
        staffDetailsModule, StaffListModule, openinghoursAddModule,
        openinghoursEditModule, staffEditModule, openingHoursListModule,
        WorkingTimeModule, HolidayListModule, WorkingStatusModule,LeavesAddModule,
        WorkingHoursAddModule,WorkingHoursEditModule,HolidayAddModule,LeavesEditModule,HolidayEditModule

    ],
})

export class BusinessManagementModule { }