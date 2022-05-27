import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NoReceiverCodeComponent} from "./no-receiver-code.component";
import {NoReceiverCodeRoutingModule} from "./no-receiver-code-routing.module";
import {ProgressBarModule} from "../progress-bar/progress-bar.module";
import {MobileModule} from "../../mobile.module";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
    declarations: [NoReceiverCodeComponent],
    imports: [NoReceiverCodeRoutingModule, CommonModule, ProgressBarModule, MobileModule, MatGridListModule],
    exports: [HttpClientModule],
})
export class NoReceiverCodeModule {

}
