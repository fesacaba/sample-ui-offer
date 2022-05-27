import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EndComponent} from "./end.component";

const routes: Routes = [
    {path: '', component: EndComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EndRoutingModule {

}
