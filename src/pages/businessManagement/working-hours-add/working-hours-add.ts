import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { ApiProvider } from "mediserve-services";
import { BasePage } from '../../base/BasePage';

@IonicPage({
    defaultHistory: ['WorkingTime'],
    segment: 'working-time/working-hours-add'
})

@Component({
    selector: 'page-working-hours-add',
    templateUrl: 'working-hours-add.html'
})

export class WorkingHoursAdd extends BasePage {

    workingHour: any;
    workingHours: any = [];

    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Working Hours Add";

        this.workingHour = {
            dayOfWeek: '',
            opens: '',
            closes: '',
            session: ''
        }
    }

    add() {
        this.svcsCtrl.homeService.setItem('workingHour', this.workingHour);
        let workingHour = this.svcsCtrl.homeService.getItem('workingHour');
        if (workingHour != null || workingHour != undefined) {
            this.workingHour = workingHour;
        }

        let workingHours = this.svcsCtrl.homeService.getItem('workingHours');
        if (workingHours != null || workingHours != undefined) {
            this.workingHours = workingHours;
        }

        this.workingHours = this.workingHours || [];
        this.workingHours.push(this.workingHour);
        this.svcsCtrl.homeService.setItem('workingHours', this.workingHours);
        this.navCtrl.push('WorkingTime').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }

    cancel() {
        this.navCtrl.push('WorkingTime').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }
    
}