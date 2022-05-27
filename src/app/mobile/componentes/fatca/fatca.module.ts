import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MobileModule} from "../../mobile.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HttpClientModule} from "@angular/common/http";
import {FatcaComponent} from "./fatca.component";
import {FatcaRoutingModule} from "./fatca-routing.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {ProgressBarModule} from "../progress-bar/progress-bar.module";

@NgModule({
    declarations: [FatcaComponent],
    imports: [FatcaRoutingModule, CommonModule, MobileModule, MatProgressSpinnerModule, MatButtonToggleModule, MatRadioModule, MatButtonModule, ProgressBarModule],
    exports: [HttpClientModule],
})
export class FatcaModule {

}
