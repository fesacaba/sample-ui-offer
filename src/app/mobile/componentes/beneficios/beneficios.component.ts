import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {
  
  @Output() cartao = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  queroCartao(){
    this.cartao.emit();
  }
}
