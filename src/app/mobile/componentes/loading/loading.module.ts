import {NgModule} from "@angular/core";
import {LoadingComponent} from "./loading.component";
import {LoadingRountingModule} from "./loading-rounting.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MobileModule} from "../../mobile.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    declarations: [LoadingComponent],
    imports: [LoadingRountingModule, CommonModule, MobileModule, MatProgressSpinnerModule],
    exports: [HttpClientModule],
})
export class LoadingModule {

}
