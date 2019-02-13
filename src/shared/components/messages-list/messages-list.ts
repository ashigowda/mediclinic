import { Component, Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
    selector: 'messages-list',
    templateUrl: 'messages-list.html'
})

export class MessagesList {

    @Input('title') title: any;
    @Input('icon') icon: any;

    constructor(public nav: NavController, public view: ViewController) {

    }

    close1() {
        this.view.dismiss()
    }

}