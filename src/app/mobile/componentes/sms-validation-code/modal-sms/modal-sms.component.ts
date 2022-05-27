import {MatDialogRef} from "@angular/material/dialog";
import {Component, HostListener} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-modal-sms',
    templateUrl: './modal-sms.component.html',
    styleUrls: ['./modal-sms.component.css']
})
export class ModalSmsComponent {
    constructor(
        private dialogRef: MatDialogRef<ModalSmsComponent>,
        private router: Router
    ) {
        dialogRef.disableClose = true;
    }

    @HostListener('window:keyup.esc') onKeyUp() {
        this.dialogRef.close();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    noReceiverCode() {
        this.dialogRef.close();
        this.router.navigate(["no-receiver-code"]);
    }

    changePhoneNumber() {
        this.dialogRef.close();
        this.router.navigate(["change-phone-number"]);
    }
}
