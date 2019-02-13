import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider, PatientTemplate, ClinicPatientService, } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage({
  // name:'apponitment'
})
@Component({
  selector: 'page-messages-task',
  templateUrl: 'messages-task.html'
})

export class MessagesTask extends BasePage {

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Messages Task"
        }
    }
