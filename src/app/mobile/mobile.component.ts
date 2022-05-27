import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfferAccountService} from '../shared/services/offer-account.service';

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private service: OfferAccountService) {
    }

    showFatca: boolean = false;
    showAccount: boolean = false;
    window: string = 'home';
    nome: string = "";
    limite: number = 0;
    telefone: string = "";
    proposta: any;
    id: any;

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.id = params['id'];
        });
        this.service.getData(this.id).subscribe((res: any) => {
            this.nome = res.name;
            this.limite = res.limit;
            this.proposta = this.id;
            this.telefone = this.mascaraTelefone(res.phoneNumber);
            this.showFatca = true;
            this.showAccount = true;

        })
    }

    mascaraTelefone(telefone: string): string {
        let retorno = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 7) + '-' + telefone.substring(7, 11);
        return retorno;
    }

    onboarding() {
        this.window = 'onboarding';
    }

    goHome() {
        this.window = 'home';
    }

    scroll(el: HTMLElement) {
        el.scrollIntoView({behavior: "smooth"});
    }
}
