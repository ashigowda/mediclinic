import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { ApiProvider } from "mediserve-services";
import { BasePage } from '../../base/BasePage';

@IonicPage({
    defaultHistory: ['WorkingTime'],
    segment: 'working-time/working-hours-edit'
})

@Component({
    selector: 'page-workingHours-edit',
    templateUrl: 'workingHours-edit.html'
})

export class WorkingHoursEdit extends BasePage {

    workingHour: any;
    workingHours: any = [];
    index: any;

    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Working Hours Edit";

        this.workingHour = this.navParams.get('item');
        this.index = this.navParams.get('index');
    }

    update() {
        this.svcsCtrl.homeService.setItem('workingHour', this.workingHour);
        let workingHour = this.svcsCtrl.homeService.getItem('workingHour');
        if (workingHour != null || workingHour != undefined) {
            this.workingHour = workingHour;
        }

        let workingHours = this.svcsCtrl.homeService.getItem('workingHours');
        if (workingHours != null || workingHours != undefined) {
            this.workingHours = workingHours;
        }

        this.workingHours[this.index] = this.workingHour;
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