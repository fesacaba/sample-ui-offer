import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ChangePhoneNumberComponent} from "./change-phone-number.component";
import {ChangePhoneNumberRoutingModule} from "./change-phone-number-routing.module";
import {MobileModule} from "../../mobile.module";
import {ProgressBarModule} from "../progress-bar/progress-bar.module";

@NgModule({
    declarations: [ChangePhoneNumberComponent],
    imports: [ChangePhoneNumberRoutingModule, CommonModule, MobileModule, ProgressBarModule],
    exports: [HttpClientModule],
})
export class ChangePhoneNumberModule {

}
