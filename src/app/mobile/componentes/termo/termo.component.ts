import {Component, OnInit} from "@angular/core";
import {IProgressBar} from "../progress-bar/interfaces/progress-bar.interface";
import {Router} from "@angular/router";
import {TermoModalComponent} from "./modal-termo/termo-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {ModalPdfComponent} from "../modal-pdf/modal-pdf.component";

@Component({
    selector: 'app-termo',
    templateUrl: './termo.component.html',
    styleUrls: ['./termo.component.css'],

})
export class TermoComponent implements OnInit {

    termoAceiteCartao: boolean = false;
    termoAceiteConta: boolean = false;

    constructor(
        public dialog: MatDialog,
        private router: Router
    ) {
        this.setInitialProgress();
    }

    setInitialProgress(): void {
        this.progress = {
            actual: 3,
            total: 3
        }
    }

    next() {
        if (!this.termoAceiteCartao && !this.termoAceiteConta) {
            console.log('nenhum')
            this.dialog.open(TermoModalComponent, {
                disableClose: false,
                width: '100%',
                maxHeight: '660px',
                maxWidth: 'unset',
                panelClass: ['start-modal', 'slideInUp', 'overflow-modal'],
            });
        } else if (!this.termoAceiteCartao && this.termoAceiteConta) {
            this.router.navigate(["loading"]);
        } else if (this.termoAceiteCartao && !this.termoAceiteConta) {
            this.router.navigate(["loading"]);
        }else{
            this.router.navigate(["sms"]);
        }
    }

    progress: IProgressBar = {
        actual: 0,
        total: 0
    };

    goBack() {
        this.router.navigate(["fatca"]);
    }


    openPdf(url: string) {

        this.dialog.open(ModalPdfComponent, {
            disableClose: true,
            maxWidth: '540px',
            maxHeight: '700px',
            height: '100%',
            panelClass: ['modal-pdf-proposta-lg_full-screen-modal', 'slideInUp', 'overflow-modal'],
            data: url,
        });
    }

    ngOnInit(): void {
    }
}
