import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ApiProvider, UserTemplate, ClinicResponse } from 'mediserve-services';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
    // segment: ':clinicPatientId/appointment-add-step1',
    // defaultHistory: ['contactSelect']
})

@Component({
    selector: 'page-goal-add',
    templateUrl: 'goal-add.html'
})

export class GoalAdd extends BasePage {

    constructor(protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl);

        this.title = "Goal Add"
    }

    add() {
        this.navCtrl.push('CarePlan').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }

    cancel() {
        this.navCtrl.push('CarePlan').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }
}