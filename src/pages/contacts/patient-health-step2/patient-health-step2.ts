import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { ApiProvider, HealthCondition, ClinicPatientHealthrecordService, HealthResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'patient-health-step2/:clinicPatientId',
    defaultHistory: ['patientHealthStep1']
})

@Component({
    selector: 'page-patient-health-step2',
    templateUrl: 'patient-health-step2.html'
})

export class patientHealthStep2 extends BasePage {

    patientHealth: HealthResponse[];
    healthId = this.svcsCtrl.homeService.getItem('healthId');
    clinicPatientId = this.svcsCtrl.homeService.getItem('patientId');
    input: ClinicPatientHealthrecordService.ListByPatientParams;

    details: HealthCondition[] = [
        {
            status: 'string',
            key: 'Hypertension',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'IHD Disorder',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'CKD',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Liver Disorder',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Thyroid Disorder',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Others',
            from: "",
            to: "",
            notes: ''
        },
    ]

    constructor(protected navCtrl: NavController, protected navParams: NavParams, protected svcsCtrl: ApiProvider, public modalCtrl: ModalController) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Add Health";
        this.input = {
            patientId: this.clinicPatientId,
            clinicId: this.svcsCtrl.homeService.getItem('clinicId')
        }
        //listing patient health and removing the standared ones
        this.svcsCtrl.clinicPatientHealthrecordService.listByPatient(this.input).subscribe((response) => {
            this.patientHealth = response;
            console.log("health" + JSON.stringify(this.patientHealth))
            if (this.patientHealth[0] != undefined) {
                for (let x in this.patientHealth[0].conditions) {
                    let prescription = this.details.find(record => record.key === this.patientHealth[0].conditions[x].key);
                    let index = this.details.indexOf(prescription);
                    if (index !== -1) {
                        this.details[index] = this.patientHealth[0].conditions[x];
                    }
                }
            }
        })
    }

    gotoNextPage() {
        if (this.healthId) {
            this.navCtrl.push('patientHealthStep3')
        }
        else {
            this.navCtrl.push('patientHealthStep3')
        }
    }

    gotoEditPage(key) {
        let contactModal = this.modalCtrl.create('patientHealthEdit', { key });
        contactModal.present();
    }

}