import {Component} from "@angular/core";
import {IProgressBar} from "../progress-bar/interfaces/progress-bar.interface";
import {Router} from "@angular/router";

@Component({
    selector: 'app-no-receiver-code',
    templateUrl: './no-receiver-code.component.html',
    styleUrls: ['./no-receiver-code.component.css'],

})
export class NoReceiverCodeComponent{

    progress: IProgressBar = {
        actual: 6,
        total: 6
    };

    constructor(
        private router: Router
    ) {
    }

    goBack() {
        this.router.navigate(["sms"]);
    }

    callcenter() {
        this.router.navigate(["callcenter"]);

    }
}
