import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {EndComponent} from "./end.component";
import {EndRoutingModule} from "./end-routing.module";

@NgModule({
    declarations: [EndComponent],
    imports: [EndRoutingModule, CommonModule],
    exports: [HttpClientModule],
})
export class EndModule {

}
