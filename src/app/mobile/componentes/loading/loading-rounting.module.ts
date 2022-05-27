import {NgModule} from "@angular/core";
import {LoadingComponent} from "./loading.component";
import {RouterModule, Routes} from "@angular/router";
import {MobileComponent} from "../../mobile.component";

const routes: Routes = [
    { path: '', component: LoadingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoadingRountingModule {

}
