import {Component, HostListener} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-modal-download',
    templateUrl: './modal-fatca.component.html',
    styleUrls: ['./modal-fatca.component.css']
})
export class ModalFatcaComponent {

    constructor(private dialogRef: MatDialogRef<ModalFatcaComponent>) {
        dialogRef.disableClose = true;
    }

    @HostListener('window:keyup.esc') onKeyUp() {
        this.dialogRef.close();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
