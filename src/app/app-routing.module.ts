import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mobileRoutes: Routes = [
    {
        path: '',
        redirectTo: '/mobile',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule)
    },
    {
        path: 'fatca',
        loadChildren: () => import('./mobile/componentes/fatca/fatca.module').then(m => m.FatcaModule)
    },
    {
        path: 'loading',
        loadChildren: () => import('./mobile/componentes/loading/loading.module').then(m => m.LoadingModule)
    },
    {
        path: 'disapprove',
        loadChildren: () => import('./mobile/componentes/disapprove/disapprove.module').then(m => m.DisapproveModule)
    },
    {
        path: 'termo',
        loadChildren: () => import('./mobile/componentes/termo/termo.module').then(m => m.TermoModule)
    },
    {
        path: 'onboarding',
        loadChildren: () => import('./mobile/componentes/onboarding/onboarding.module').then(m => m.OnboardingModule)
    },
    {
        path: 'sms',
        loadChildren: () => import('./mobile/componentes/sms-validation-code/sms-validation-code.module').then(m => m.SmsValidationCodeModule)
    },
    {
        path: 'change-phone-number',
        loadChildren: () => import('./mobile/componentes/change-phone-number/change-phone-number.module').then(m => m.ChangePhoneNumberModule)
    },
    {
        path: 'no-receiver-code',
        loadChildren: () => import('./mobile/componentes/no-receiver-code/no-receiver-code.module').then(m => m.NoReceiverCodeModule)
    },
    {
        path: 'callcenter',
        loadChildren: () => import('./mobile/componentes/callcenter/callcenter.module').then(m => m.CallcenterModule)
    },
    {
        path: 'end',
        loadChildren: () => import('./mobile/componentes/end/end.module').then(m => m.EndModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(mobileRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
