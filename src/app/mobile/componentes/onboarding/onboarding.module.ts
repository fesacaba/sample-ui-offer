import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MobileModule} from "../../mobile.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {ProgressBarModule} from "../progress-bar/progress-bar.module";
import {HttpClientModule} from "@angular/common/http";
import {OnboardRoutingModule} from "./onboard-routing.module";

@NgModule({
    declarations: [],
    imports: [OnboardRoutingModule, CommonModule, MobileModule, MatProgressSpinnerModule, MatButtonToggleModule, MatRadioModule, MatButtonModule, ProgressBarModule],
    exports: [HttpClientModule],
})
export class OnboardingModule {

}
