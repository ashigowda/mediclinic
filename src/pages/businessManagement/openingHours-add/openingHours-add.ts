import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { ApiProvider, OpeningHour, ClinicOpeningHourService } from "mediserve-services";
import { BasePage } from '../../base/BasePage';

@IonicPage({
    defaultHistory: ['openingHoursList'],
    segment: 'openinghours-add/:openingHourId'
})

@Component({
    selector: 'page-openingHours-add',
    templateUrl: 'openingHours-add.html'
})
export class openinghoursAdd extends BasePage {

    openingHours: OpeningHour;
    params: ClinicOpeningHourService.CreateParams;
    work: any;

    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
       
        this.work = this.navParams.get('work');

        if(this.work == 'work'){
            this.title = 'WorkingHours Add';
        }
        else{
            this.title = "OpeningHours Add";
        }
        this.openingHours = {
            dayOfWeek: '',
            closes: '',
            opens: ''
        }
    }

    add() {
       
        this.params = {
            clinicId: this.svcsCtrl.homeService.getItem('clinicId'),
            body: this.openingHours
        }
        this.svcsCtrl.clinicOpeningHourService.create(this.params).subscribe((response) => {
            if(this.work != 'work'){
            this.navCtrl.push('openingHoursList')
            }else{
                this.navCtrl.push('WorkingTime').then(() => {
                    const startIndex = this.navCtrl.getActive().index - 2;
                    this.navCtrl.remove(startIndex, 2);
                });
            }
            // if(this.work == 'work'){
            // this.navCtrl.push('WorkingTime')
            // }
            // else{
            //     this.navCtrl.push('openingHoursList')
            // }
        })
    }
}