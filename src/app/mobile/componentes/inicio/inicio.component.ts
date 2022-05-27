import {Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output} from '@angular/core';
import {formatCurrency} from '@angular/common';
import {Router} from "@angular/router";

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    @Input() nomeCliente!: string;
    @Input() limite!: string;
    @Output() beneficio = new EventEmitter<string>();
    @Output() cartao = new EventEmitter<string>();

    constructor(@Inject(LOCALE_ID) public locale: string,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    limiteFormatado() {
        return formatCurrency(Number(this.limite), this.locale, 'R$')
    }

    queroCartao() {
        this.router.navigate(['onboarding']);
    }

    scrollTo() {
        this.beneficio.emit();
    }

}
