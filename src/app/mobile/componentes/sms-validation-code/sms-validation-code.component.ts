import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnInit,
    Output,
    QueryList,
    Renderer2,
    ViewChildren
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProgressBar} from "../progress-bar/interfaces/progress-bar.interface";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {OfferAccountService} from "../../../shared/services/offer-account.service";
import {SendPin} from "../../../shared/request/send-pin";
import {ValidPin} from "../../../shared/request/valid-pin";
import {HttpErrorResponse} from "@angular/common/http";
import {CreateAccount} from "../../../shared/request/create-account";
import {ModalSmsComponent} from "./modal-sms/modal-sms.component";

@Component({
    selector: 'app-sms-validation-code',
    templateUrl: './sms-validation-code.component.html',
    styleUrls: ['./sms-validation-code.component.css']
})
export class SmsValidationCodeComponent implements OnInit {
    public form: FormGroup = new FormGroup({});
    public textCodeSent = '';
    statusTokenSms: boolean = false;
    reenviar: boolean = false;
    contadorTempoSms = 60;
    contador: boolean = false;
    time: any = null;

    @Output() onResendSmsBtnClicked = new EventEmitter<any>();
    @Output() onSendSmsBtnClicked = new EventEmitter<any>();


    @Input() telefone = '';
    @Output() submitEmitter = new EventEmitter<any>();
    @Output() cancelEmitter = new EventEmitter<any>();
    @ViewChildren('input') inputs: QueryList<ElementRef> = new QueryList<ElementRef>();
    @HostListener('paste', ['$event']) blockPaste = (e: KeyboardEvent) => e.preventDefault();
    @HostListener('copy', ['$event']) blockCopy = (e: KeyboardEvent) => e.preventDefault();
    @HostListener('cut', ['$event']) blockCut = (e: KeyboardEvent) => e.preventDefault();

    constructor(
        private formBuilder: FormBuilder,
        public dialog: MatDialog,
        private router: Router,
        private render: Renderer2,
        private elementRef: ElementRef,
        private service: OfferAccountService
    ) {
    }

    ngOnInit(): void {
        this.sendPin();
        document.getElementById("numberOne")!.focus()
        this.onSendSmsBtnClicked.emit();
        this.cronometro();
        this.buildForm();
        sessionStorage.removeItem('statusSmsInvalido')
    }

    cronometro() {
        this.contador = true;
        this.time = setInterval(() => {
            this.contadorTempoSms -= 1;
            if (this.contadorTempoSms <= 0) {
                this.contadorTempoSms = 60;
                clearInterval(this.time);
                this.contador = false;
                this.reenviar = true;
            }
        }, 1000)
    }

    resend() {
        this.form.reset();
        this.reenviar = false;
        this.contador = true;
        this.cronometro();
        this.onResendSmsBtnClicked.emit();
    }

    progress: IProgressBar = {
        actual: 5,
        total: 5
    };

    confirm() {
        const code =
            this.form.get('numberOne')!.value.toString() +
            this.form.get('numberTwo')!.value.toString() +
            this.form.get('numberThree')!.value.toString() +
            this.form.get('numberFour')!.value.toString() +
            this.form.get('numberFive')!.value.toString() +
            this.form.get('numberSix')!.value.toString();

        this.submitEmitter.emit(code);

        this.service
            .validPin(new ValidPin('13', code))
            .subscribe((res: any) => {
                this.validConfirmSucess();
            }, (error: HttpErrorResponse) => {
                this.statusTokenSms = true;
            })
    }

    private validConfirmSucess(): void {
        this.service
            .createAccount(new CreateAccount('', true, 10))
            .subscribe((res: any) => {
                this.router.navigate(["end"]);
            })
    }

    cancel() {
        this.cancelEmitter.emit();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            numberOne: ['', [Validators.required]],
            numberTwo: ['', [Validators.required]],
            numberThree: ['', [Validators.required]],
            numberFour: ['', [Validators.required]],
            numberFive: ['', [Validators.required]],
            numberSix: ['', [Validators.required]],
        });
    }

    validLength(name: string): boolean {
        // @ts-ignore
        if (this.form.get(name).value === null) {
            return false
        } else {
            // @ts-ignore
            return this.form.get(name).value.toString().length > 0;
        }
    }

    keypress(event: any, input: string, index: number) {
        this.statusTokenSms = false;
        event.preventDefault();
        const newValue = event.key;
        const value = this.form.get(input)!.value ? this.form.get(input)!.value.toString() : undefined;
        const charCode = (event.which) ? event.which : event.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return;
        }

        if (!value) {
            this.form.get(input)!.setValue(newValue);

            if (index < 6) {
                this.inputs.toArray()[index++].nativeElement.focus();

            } else if (index === 6 && this.reenviar === false) {
                this.confirm();
            }
        }

    }

    backspaceDown(input: string) {
        switch (input) {
            case "numberSix":
                this.form.get("numberSix")!.value == null ? document.getElementById("numberFive")!.focus() : null
                break;
            case "numberFive":
                this.form.get("numberFive")!.value == null ? document.getElementById("numberFour")!.focus() : null
                break;
            case "numberFour":
                this.form.get("numberFour")!.value == null ? document.getElementById("numberThree")!.focus() : null
                break;
            case "numberThree":
                this.form.get("numberThree")!.value == null ? document.getElementById("numberTwo")!.focus() : null
                break;
            case "numberTwo":
                document.getElementById("numberOne")!.focus()
                break;
        }
    }

    setAutoCompleteTokenFromClipboard(event: ClipboardEvent) {
        const changedValue = event.clipboardData!.getData('text');
        this.setValueInputs(changedValue)
    }

    setAutoCompleteTokenFromInput(value: any) {
        const changedValue = value.data
        this.setValueInputs(changedValue)
    }

    setValueInputs(changedValue: string) {
        if (changedValue && changedValue.length === 6) {
            const arrTokenValue = changedValue.split("")
            this.form.get('numberOne')!.setValue(arrTokenValue[0]);
            this.form.get('numberTwo')!.setValue(arrTokenValue[1]);
            this.form.get('numberThree')!.setValue(arrTokenValue[2]);
            this.form.get('numberFour')!.setValue(arrTokenValue[3]);
            this.form.get('numberFive')!.setValue(arrTokenValue[4]);
            this.form.get('numberSix')!.setValue(arrTokenValue[5]);
            this.inputs.toArray()[5].nativeElement.focus();
        }
    }


    goBack() {
        this.router.navigate(["termo"]);
    }

    openHelp() {
        this.dialog.open(ModalSmsComponent, {
            disableClose: false,
            width: '100%',
            maxHeight: '660px',
            maxWidth: 'unset',
            panelClass: ['start-modal', 'slideInUp', 'overflow-modal'],
        });
    }

    private sendPin() {
        let objectRequest = new SendPin('13');
        this.service
            .sendPin(objectRequest)
            .subscribe((res: any) => {
            })
    }

}
