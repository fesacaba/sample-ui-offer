import {Component} from "@angular/core";
import {IProgressBar} from "../progress-bar/interfaces/progress-bar.interface";
import {Router} from "@angular/router";

@Component({
    selector: 'app-change-phone-number',
    templateUrl: './change-phone-number.component.html',
    styleUrls: ['./change-phone-number.component.css'],
})
export class ChangePhoneNumberComponent {

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
}
