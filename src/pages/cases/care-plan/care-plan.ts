import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ApiProvider } from 'mediserve-services';
import { BasePage } from '../../base/BasePage';
// import { Observable } from 'rxjs/Observable';

@IonicPage({
    // segment: ':clinicPatientId/appointment-add-step1',
    // defaultHistory: ['contactSelect']
})

@Component({
    selector: 'page-care-plan',
    templateUrl: 'care-plan.html'
})

export class CarePlan extends BasePage {

    tabIndex: string = "0"
    data1 = [];
    data2 = [];
    data = [];

    constructor(protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl);

        this.title = "Case"

    }

    toggleDetails(data) {
        if (data.showDetails) {
            data.showDetails = false;
        } else {
            data.showDetails = true;
        }
    }

    toggleDetails1(data1) {
        if (data1.showDetails) {
            data1.showDetails = false;
        } else {
            data1.showDetails = true;
        }
    }

    createProblem() {
        this.navCtrl.push('ProblemAdd')
    }

    createGoal() {
        this.navCtrl.push('GoalAdd')
    }

    createTask() {
        this.navCtrl.push('TaskAdd')
    }
}