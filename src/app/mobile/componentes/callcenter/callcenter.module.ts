import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MobileModule} from "../../mobile.module";
import {ProgressBarModule} from "../progress-bar/progress-bar.module";
import {HttpClientModule} from "@angular/common/http";
import {CallcenterComponent} from "./callcenter.component";
import {CallcenterRountingModule} from "./callcenter-rounting.module";

@NgModule({
    declarations: [CallcenterComponent],
    imports: [CallcenterRountingModule, CommonModule, MobileModule, ProgressBarModule],
    exports: [HttpClientModule],
})
export class CallcenterModule {

}
