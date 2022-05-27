import {NgModule} from "@angular/core";
import {DisapproveComponent} from "./disapprove.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '', component: DisapproveComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisapproveRountingModule {

}
