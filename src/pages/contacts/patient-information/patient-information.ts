import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { NavController, IonicPage, NavParams, ActionSheetController, Platform, ModalController } from 'ionic-angular';
import { ApiProvider, ClinicPatientService, PatientResponse, UserTemplate } from 'mediserve-services/lib';
import { Photoupload } from '../../../shared/components/photo-upload/photo-upload';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
    segment: 'patient-list/patient-information/:clinicPatientId',
    defaultHistory: ['patientList']
})

@Component({
    selector: 'page-patient-information',
    templateUrl: 'patient-information.html'
})

export class patientInformation extends BasePage {

    patient: Observable<PatientResponse>;
    input: ClinicPatientService.ReadParams;
    profile: Observable<UserTemplate>;
    public photos: any;
    patientId = this.svcsCtrl.homeService.getItem('patientId');

    navList: any = [
        {
            title: 'Account Settings',
            page: 'patientProfile',
            icon: 'cog'
        },
        {
            title: 'Health Background',
            page: 'patientHealthView',
            icon: 'clock'
        },
        {
            title: 'Appointment History',
            page: 'AppointmentHistory',
            icon: 'archive'
        },
        {
            title: 'Prescription History',
            page: 'PrescriptionHistory',
            icon: 'paper'
        },
        {
            title: 'Messages',
            page: 'Messages',
            icon: 'chatbubbles'
        }
    ]

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        public camera: Camera,
        public actionsheetCtrl: ActionSheetController,
        public platform: Platform,
        protected svcsCtrl: ApiProvider,
        public modalCtrl: ModalController
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Account Information";
        let clinicId = this.svcsCtrl.homeService.getItem('clinicId')
        this.input = {
            patientId: this.patientId,
            clinicId: clinicId
        }
    }

    ionViewWillEnter() {

        this.patient = this.svcsCtrl.clinicPatientService.read(this.input)
    }

    ngOnInit() {
        this.photos = [];
    }

    gotoPage(page, clinicPatientId) {
        this.svcsCtrl.homeService.setItem('patientId',clinicPatientId)
        this.navCtrl.push(page, { clinicPatientId, info: 'info' }).then(() => {
            const startIndex = this.navCtrl.getActive().index - 0;
            this.navCtrl.remove(startIndex, 0);
        });
    }

    bookAppontment(clinicPatientId) {
        this.svcsCtrl.homeService.setItem('patientId',clinicPatientId)
        this.navCtrl.push('appointmentAddStep1', { clinicPatientId })
    }


    changePhotoModal() {
        let photoUploadModal = this.modalCtrl.create(Photoupload, {
            type: "Patient",
            // referenceId: this.patient.firstName + " " + this.clinicPatient.lastName,
            caller: "Patient Information",
            imageId: "????"
        });
        photoUploadModal.present();

        photoUploadModal.onDidDismiss(data => {
            console.log("Data =>", data)
        })
    }


}