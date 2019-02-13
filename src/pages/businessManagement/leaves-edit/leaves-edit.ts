import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { ApiProvider } from "mediserve-services";
// import { Observable } from 'rxjs/Observable';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'business-settings/leaves-edit',
    defaultHistory: ['clinicSettings']
})

@Component({
    selector: 'page-leaves-edit',
    templateUrl: 'leaves-edit.html'
})

export class LeavesEdit extends BasePage {

    index: any;
    startDate: any;
    startDates: any;
    endDate: Date;

    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Leaves Edit";
        this.index = this.navParams.get('index')
        this.startDate = this.navParams.get('leave')

    }

    update() {
        this.svcsCtrl.homeService.setItem('startDate', this.startDate);
        let startDate = this.svcsCtrl.homeService.getItem('startDate');
        if (startDate != null || startDate != undefined) {
            this.startDate = startDate;
        }
        let startDates = this.svcsCtrl.homeService.getItem('startDates');
        if (startDates != null || startDates != undefined) {
            this.startDates = startDates;
        }
        this.startDates[this.index] = this.startDate
        this.svcsCtrl.homeService.setItem('startDates', this.startDates);
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