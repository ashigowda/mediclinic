import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { ApiProvider } from "mediserve-services";
// import { Observable } from 'rxjs/Observable';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'business-settings/holiday-add',
    defaultHistory: ['HolidayList']
})

@Component({
    selector: 'page-holiday-add',
    templateUrl: 'holiday-add.html'
})

export class HolidayAdd extends BasePage {

    holiday: any;
    holidays: any;

    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Holiday Add";
        this.holiday = {
            date: '',
            name: ''
        }
    }

    add() {
        this.svcsCtrl.homeService.setItem('holiday', this.holiday);
        let holiday = this.svcsCtrl.homeService.getItem('holiday');
        if (holiday != null || holiday != undefined) {
            this.holiday = holiday;
        }
        let holidays = this.svcsCtrl.homeService.getItem('holidays');
        if (holidays != null || holidays != undefined) {
            this.holidays = holidays;
        }
        this.holidays = this.holidays || [];

        this.holidays.push(this.holiday);
        this.svcsCtrl.homeService.setItem('holidays', this.holidays);
        this.navCtrl.push('HolidayList').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }

    cancel() {
        this.navCtrl.push('HolidayList').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }
}