import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, UserTemplate } from "mediserve-services";
import { BasePage } from '../../../../pages/base/BasePage';
import { Observable } from 'rxjs';

@IonicPage({
    segment: 'settings/profile-details',
     defaultHistory: ['accountManagement']
})

@Component({
    selector: 'page-profile-details',
    templateUrl: 'profile-details.html'
})

export class profileDetails extends BasePage {

    profile: Observable<UserTemplate>;

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Profile Details";
       
    }

    ionViewWillEnter(){
        this.profile = this.svcsCtrl.profileService.read();
    }
    
    edit() {
        this.navCtrl.push('profileEdit')
    }

}