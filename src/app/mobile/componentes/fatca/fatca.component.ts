import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {IProgressBar} from "../progress-bar/interfaces/progress-bar.interface";
import {ModalFatcaComponent} from "../modal-fatca/modal-fatca.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-fatca',
    templateUrl: './fatca.component.html',
    styleUrls: ['./fatca.component.css'],

})
export class FatcaComponent implements OnInit {

    fatca: boolean = false;
    progress: IProgressBar = {
        actual: 2,
        total: 3
    };

    constructor(
        public dialog: MatDialog,
        private router: Router
    ) {
        this.setInitialProgress();
    }

    public setInitialProgress(): void {
        this.progress = {
            actual: 2,
            total: 3
        }
    }

    public setfactTrue() {
        this.fatca = true;
    }

    public ngOnInit(): void {
    }

    public next() {
        if (this.fatca) {
            this.router.navigate(["loading"]);
        } else {
            this.router.navigate(["termo"]);
        }
    }

    public more() {
        this.dialog.open(ModalFatcaComponent, {
            disableClose: false,
            width: '100%',
            maxHeight: '660px',
            maxWidth: 'unset',
            panelClass: ['start-modal', 'slideInUp', 'overflow-modal'],
        });
    }

    goBack() {
        this.router.navigate(["onboarding"]);
    }

    setfactFalse() {
        this.fatca = false;
    }
}
