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
    selector: 'page-case-list',
    templateUrl: 'case-list.html'
  })

export class CaseList extends BasePage {

    business: Observable<ClinicResponse>;
    profile: Observable<UserTemplate>;
    constructor(protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl);

        this.title = "Cases"
    }

    ionViewWillEnter() {
        let clinicId = this.svcsCtrl.homeService.getItem('clinicId');
        this.profile = this.svcsCtrl.profileService.read();
        this.business = this.svcsCtrl.clinicBusinessService.read(clinicId)
    }
    
    viewCase(){
        this.navCtrl.push('CarePlan')
    }

}