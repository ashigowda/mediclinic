import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';


@Component({
    selector: 'page-loading-patient-list',
    templateUrl: 'page-loading-patient-list.html'
})

export class pageLoadingPatientList {

    // @Input('center') center: any;
    constructor(protected navCtrl: NavController, public app: App) {
    }


}