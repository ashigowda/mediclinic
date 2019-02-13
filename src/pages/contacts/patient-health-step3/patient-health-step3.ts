import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { ApiProvider, HealthCondition, ClinicPatientHealthrecordService, HealthResponse } from 'mediserve-services/lib';
import { Observable } from 'rxjs/Observable';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'patient-health-step3/:clinicPatientId',
    defaultHistory: ['patientHealthStep2']
})

@Component({
    selector: 'page-patient-health-step3',
    templateUrl: 'patient-health-step3.html'
})

export class patientHealthStep3 extends BasePage {

    patientHealthCreate: HealthResponse;
    inputCreate: ClinicPatientHealthrecordService.CreateParams;
    patientHealthUpdate: Observable<HealthResponse>;
    inputUpdate: ClinicPatientHealthrecordService.UpdateParams;
    patientHealth: HealthResponse[];
    healthId = this.svcsCtrl.homeService.getItem('healthId');
    clinicPatientId = this.svcsCtrl.homeService.getItem('patientId');
    input: ClinicPatientHealthrecordService.ListByPatientParams;


    details: HealthCondition[] = [     
        {
            status: 'string',
            key: 'Tuberculosis',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'COPD',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Asthma',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'ILD',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Cardio Thoracis Surgery',
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

    constructor(  protected navCtrl: NavController, protected navParams: NavParams, protected svcsCtrl: ApiProvider, public modalCtrl: ModalController) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Add Health";
        this.input = {
            patientId: this.clinicPatientId,
            clinicId: this.svcsCtrl.homeService.getItem('clinicId')
        }
         //listing patient health and removing the standared ones
         this.svcsCtrl.clinicPatientHealthrecordService.listByPatient(this.input).subscribe((response) => {
            this.patientHealth = response;
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
            //for update patient health
            this.inputUpdate = {
                healthId: this.healthId,
                clinicId: this.svcsCtrl.homeService.getItem('clinicId'),
                body: {
                    doctor: 'null',
                    patient: this.clinicPatientId,
                    conditions: this.svcsCtrl.clinicPatientHealthrecordService.getItem('healthRecords'),
                    reportedBy: this.clinicPatientId,
                    reportedDate: '14-06-2018'
                },
            }
            this.svcsCtrl.clinicPatientHealthrecordService.update(this.inputUpdate).subscribe((response) => {
                this.svcsCtrl.clinicPatientHealthrecordService.setItem('healthRecords', null)
                console.log('response' + JSON.stringify(response))
            });
            console.log('update' + JSON.stringify(this.patientHealthUpdate))
            this.navCtrl.push('patientHealthConfirmation', { clinicPatientId: this.clinicPatientId, healthId: this.healthId })

        } else {
            //create patient health 
            this.inputCreate = {
                clinicId: this.svcsCtrl.homeService.getItem('clinicId'),
                body: {
                    doctor: 'null',
                    patient:this.clinicPatientId,
                    conditions: this.svcsCtrl.clinicPatientHealthrecordService.getItem('healthRecords'),
                    reportedBy: this.clinicPatientId,
                    reportedDate: '14-06-2018'
                }
            }
            this.svcsCtrl.clinicPatientHealthrecordService.create(this.inputCreate).subscribe((response) => {
                this.patientHealthCreate = response;
                this.svcsCtrl.clinicPatientHealthrecordService.setItem('healthRecords', null)
                this.navCtrl.push('patientHealthConfirmation')
            }, (err) => {
                console.log(err)
            })
        }

    }

    gotoEditPage(key) {
        this.navCtrl.push('patientHealthEdit', { key })
    }

}