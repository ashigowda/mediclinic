import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
// import { Observable } from 'rxjs/Observable';

@IonicPage({
    segment: 'business/staff-list/staff/working-time',
    defaultHistory: ['StaffList']
})

@Component({
    selector: 'page-working-time',
    templateUrl: 'working-time.html'
})

export class WorkingTime extends BasePage {

    workingHours: any;
    tabIndex: string = "0"
    workingHoursList: any = [];

    clinicId = this.svcsCtrl.homeService.getItem('clinicId');

    startDates: any = [];


    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Working Hours";
        this.startDates = this.svcsCtrl.homeService.getItem('startDates');
        this.workingHoursList = this.svcsCtrl.homeService.getItem('workingHours');
    }

    edit(item, index) {
        this.navCtrl.push('WorkingHoursEdit', { item, index })
    }

    delete(index) {
        this.workingHoursList.splice(index);
        this.svcsCtrl.homeService.setItem('workingHours', this.workingHoursList)
    }

    add() {
        this.navCtrl.push('WorkingHoursAdd')
    }

    leave() {
        this.navCtrl.push('LeavesAdd')
    }

    editLeave(leave, index) {
        this.navCtrl.push('LeavesEdit', { leave, index })
    }

    deleteLeave(index) {
        this.startDates.splice(index);
        this.svcsCtrl.homeService.setItem('startDates', this.startDates)
    }
    
}