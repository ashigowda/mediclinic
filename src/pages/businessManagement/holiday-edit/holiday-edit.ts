import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { ApiProvider } from "mediserve-services";
// import { Observable } from 'rxjs/Observable';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'business-settings/holiday-edit',
    defaultHistory: ['HolidayList']
})

@Component({
    selector: 'page-holiday-edit',
    templateUrl: 'holiday-edit.html'
})

export class HolidayEdit extends BasePage {

    holiday: any;
    holidays: any;
    index: any;

    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Holiday Edit";
        this.index = this.navParams.get('index');
        this.holiday = this.navParams.get('holiday')
    }

    update() {
        this.svcsCtrl.homeService.setItem('holiday', this.holiday);
        let holiday = this.svcsCtrl.homeService.getItem('holiday');
        if (holiday != null || holiday != undefined) {
            this.holiday = holiday;
        }
        let holidays = this.svcsCtrl.homeService.getItem('holidays');
        if (holidays != null || holidays != undefined) {
            this.holidays = holidays;
        }
        this.holidays[this.index] = this.holiday;

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