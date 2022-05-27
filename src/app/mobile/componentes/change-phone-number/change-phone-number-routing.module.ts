import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ChangePhoneNumberComponent} from "./change-phone-number.component";

const routes: Routes = [
    {path: '', component: ChangePhoneNumberComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangePhoneNumberRoutingModule {

}
