import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { ApiProvider } from "mediserve-services";
// import { Observable } from 'rxjs/Observable';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'business-settings/leaves-add',
    defaultHistory: ['clinicSettings']
})

@Component({
    selector: 'page-leaves-add',
    templateUrl: 'leaves-add.html'
})

export class LeavesAdd extends BasePage {

    startDate: any;
    startDates: any;

    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Leaves Add";
        this.startDate = {
            startDate: '',
            endDate: ''
        }
    }

    add() {
        this.svcsCtrl.homeService.setItem('startDate', this.startDate);
        let startDate = this.svcsCtrl.homeService.getItem('startDate');
        if (startDate != null || startDate != undefined) {
            this.startDate = startDate;
        }
        let startDates = this.svcsCtrl.homeService.getItem('startDates');
        if (startDates != null || startDates != undefined) {
            this.startDates = startDates;
        }
        this.startDates = this.startDates || [];

        this.startDates.push(this.startDate);
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