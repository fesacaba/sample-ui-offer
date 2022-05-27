import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TermoComponent} from "./termo.component";

const routes: Routes = [
    {path: '', component: TermoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TermoRountingModule {

}
