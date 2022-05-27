import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SmsValidationCodeComponent} from "./sms-validation-code.component";

const routes: Routes = [
    {path: '', component: SmsValidationCodeComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SmsValidationCodeRoutingModule {

}
