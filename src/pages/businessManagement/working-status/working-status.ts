import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'business/working-status',
    defaultHistory: ['businessManagement']
})
@Component({
    selector: 'page-working-status',
    templateUrl: 'working-status.html'
})

export class WorkingStatus extends BasePage {

    constructor(
        protected navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Working Status";
    }

    back(){
        this.navCtrl.push('businessManagement').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }
}