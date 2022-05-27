import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {LoaderService} from "../../../shared/services/loader.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],

})
export class LoadingComponent implements OnInit {

    show: boolean = true;
    isLoading: Subject<boolean> = this.loaderService.isLoading;
    count: number = 0;

    constructor(
        private loaderService: LoaderService,
        private cdr: ChangeDetectorRef,
        private router: Router
    ) {
        this.subscribeLoading();
    }

    subscribeLoading(): void {


        this.isLoading.subscribe({
            next: (load: boolean) => {
                this.show = load;
                this.changeOverflow();
                this.cdr.detectChanges();
            }
        });
        setTimeout(() => {
                this.router.navigate(["disapprove"]);
            },
            5000);

    }


    ngOnInit(): void {
        console.log('iniciou o loading')
    }

    changeOverflow(): void {
        document.body.style.overflow = this.show ? 'hidden' : 'auto';
    }
}
