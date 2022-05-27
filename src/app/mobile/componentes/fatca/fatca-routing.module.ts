import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FatcaComponent} from "./fatca.component";

const routes: Routes = [
    {path: '', component: FatcaComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FatcaRoutingModule {

}
