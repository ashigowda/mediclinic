import { ApiProvider, UserTemplate, ClinicResponse } from 'mediserve-services';
import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams ,App} from 'ionic-angular';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage({
    defaultHistory: ['ebusinessHomeRegistered']
})

@Component({
    selector: 'page-ebusiness-verify',
    templateUrl: 'ebusiness-verify.html'
})

export class ebusinessVerify extends BasePage {

    business: ClinicResponse;
    profile: UserTemplate;

    navList: any = [
        {
            order: 'Verify Aadhar (Owner KYC)',
            page: 'ebusinessVerifyStep1Aadhar',
            icon: 'settings'
        }
    ]

    navList1: any = [
        {
            order: 'Upload Document',
            page: 'ebusinessVerifyUploadDocs',
            icon: 'settings'
        }
    ]

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider,
        public app: App
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Verify Business"
    }

    gotoPage() {
        this.navCtrl.push('ebusinessVerifyStep1Aadhar')
    }

    gotoUploadPage() {
        this.navCtrl.push('ebusinessVerifyUploadDocs')
    }

    submit() {
        //this.navCtrl.setRoot('tabs')
       this.app.getActiveNav().setRoot('tabs')
     // this.navCtrl.parent.select('tabs');

    }

}