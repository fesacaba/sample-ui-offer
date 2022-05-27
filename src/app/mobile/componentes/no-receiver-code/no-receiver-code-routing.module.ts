import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NoReceiverCodeComponent} from "./no-receiver-code.component";

const routes: Routes = [
    {path: '', component: NoReceiverCodeComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NoReceiverCodeRoutingModule {

}
