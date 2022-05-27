import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CallcenterComponent} from "./callcenter.component";

const routes: Routes = [
    {path: '', component: CallcenterComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CallcenterRountingModule {

}
