import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beneficios-caixa',
  templateUrl: './beneficios-caixa.component.html',
  styleUrls: ['./beneficios-caixa.component.css']
})
export class BeneficiosCaixaComponent implements OnInit {

  @Input() imagem!: string;
  @Input() texto1!: string;
  @Input() texto2!: string;

  urlPath!: string;

  constructor() { }

  ngOnInit(): void {
    this.urlPath = `assets/img/mobile/${this.imagem}.svg`
  }

}
