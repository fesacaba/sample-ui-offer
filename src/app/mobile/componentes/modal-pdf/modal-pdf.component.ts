import { Component, Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pdf',
  templateUrl: './modal-pdf.component.html',
  styleUrls: ['./modal-pdf.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalPdfComponent {
  zoom: any = 0.3;
  url: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
              private dialogRef: MatDialogRef<ModalPdfComponent>) {}

  ngAfterViewInit(): void {
    this.url = this.data;
  } 

  print(url: string){  
    let link = document.createElement("a");
        link.download = "Contrato Cartão de Crédito Omni";
        link.href = url;
        link.click();
    return true;
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
