import {Component} from "@angular/core";
import {IProgressBar} from "../progress-bar/interfaces/progress-bar.interface";
import {Router} from "@angular/router";

@Component({
    selector: 'app-callcenter',
    templateUrl: './callcenter.component.html',
    styleUrls: ['./callcenter.component.css'],
})
export class CallcenterComponent{
    progress: IProgressBar = {
        actual: 6,
        total: 6
    };
    constructor(
        private router: Router
    ) {
    }

    goBack() {
        this.router.navigate(["no-receiver-code"]);
    }

}
