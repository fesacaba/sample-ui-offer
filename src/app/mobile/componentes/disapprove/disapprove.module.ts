import {NgModule} from "@angular/core";
import {DisapproveComponent} from "./disapprove.component";
import {DisapproveRountingModule} from "./disapprove-rounting.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MobileModule} from "../../mobile.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [DisapproveComponent],
    imports: [DisapproveRountingModule, CommonModule, MobileModule, MatIconModule],
    exports: [HttpClientModule],
})
export class DisapproveModule {

}
