import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProgressBar} from '../progress-bar/interfaces/progress-bar.interface';
import {MatDialog} from '@angular/material/dialog';
import {OfferAccountService} from 'src/app/shared/services/offer-account.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from "@angular/router";
import {LoadingComponent} from "../loading/loading.component";

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.css'],
    providers: [LoadingComponent],
})
export class OnboardingComponent implements OnInit {

    @Input() telefone = "";

    @Input() nome = "";
    @Input() proposta = "";

    @Output() onBackBtnClicked = new EventEmitter<string>();
    @Output() onResendSmsBtnClicked = new EventEmitter<string>();
    @Output() onSendSmsBtnClicked = new EventEmitter<string>();
    @Output() onValidarSms = new EventEmitter<string>();

    diaVencimento?: string;

    progress: IProgressBar = {
        actual: 1,
        total: 3
    };

    constructor(public dialog: MatDialog,
                public service: OfferAccountService,
                private toastr: ToastrService,
                private router: Router
    ) {

        this.setInitialProgress();
    }

    ngOnInit(): void {
    }


    setInitialProgress(): void {
        this.progress = {
            actual: 1,
            total: 3
        }
    }

    goBack() {
        this.router.navigate(['']);
    }

    next(): void {
        this.router.navigate(['fatca']);
    }


}
