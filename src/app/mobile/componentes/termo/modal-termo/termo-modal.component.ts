import {Component, HostListener} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-modal-termo',
    templateUrl: './modal-termo.component.html',
    styleUrls: ['./modal-termo.component.css']
})
export class TermoModalComponent {

    constructor(private dialogRef: MatDialogRef<TermoModalComponent>) {
        dialogRef.disableClose = true;
    }


    closed() {
        this.dialogRef.close();
    }
}
