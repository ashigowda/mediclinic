import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { ApiProvider } from "mediserve-services";
import { BasePage } from '../../base/BasePage';
// import { Observable } from 'rxjs/Observable';

@IonicPage({
    defaultHistory: ['businessManagement']
})

@Component({
    selector: 'page-holiday-list',
    templateUrl: 'holiday-list.html'
})

export class HolidayList extends BasePage {

    holidays = this.svcsCtrl.homeService.getItem('holidays')
    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Holidays";
    }

    add() {
        this.navCtrl.push('HolidayAdd')
    }

    edit(holiday, index) {
        this.navCtrl.push('HolidayEdit', { holiday, index });
    }

    delete(index) {
        this.holidays.splice(index, 1);
        this.svcsCtrl.homeService.setItem('holidays', this.holidays)
    }

}