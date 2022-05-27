import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.css']
})
export class DuvidasComponent implements OnInit {

  duvida = [false, false, false]
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleDuvida(index: number): void {
    this.duvida[index] = !this.duvida[index];
  }

}
