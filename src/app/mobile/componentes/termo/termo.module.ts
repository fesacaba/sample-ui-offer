import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {TermoComponent} from "./termo.component";
import {TermoRountingModule} from "./termo-rounting.module";
import {MobileModule} from "../../mobile.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {ProgressBarModule} from "../progress-bar/progress-bar.module";

@NgModule({
    declarations: [TermoComponent],
    imports: [TermoRountingModule, CommonModule, MobileModule, MatProgressSpinnerModule, MatCheckboxModule, FormsModule, ProgressBarModule],
    exports: [HttpClientModule],
})
export class TermoModule {

}
