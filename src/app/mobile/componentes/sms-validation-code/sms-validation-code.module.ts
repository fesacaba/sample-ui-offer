import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MobileModule} from "../../mobile.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HttpClientModule} from "@angular/common/http";
import {SmsValidationCodeComponent} from "./sms-validation-code.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SmsValidationCodeRoutingModule} from "./sms-validation-code-routing.module";
import {ProgressBarModule} from "../progress-bar/progress-bar.module";

@NgModule({
    declarations: [SmsValidationCodeComponent],
    imports: [SmsValidationCodeRoutingModule, CommonModule, MobileModule, MatProgressSpinnerModule, ReactiveFormsModule, ProgressBarModule],
    exports: [HttpClientModule],
})
export class SmsValidationCodeModule {

}
