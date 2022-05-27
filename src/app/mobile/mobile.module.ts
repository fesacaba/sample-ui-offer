import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MobileRoutingModule} from './mobile-routing.module';
import {MobileComponent} from './mobile.component';
import {HeaderComponent} from './componentes/header/header.component';
import {ButtonComponent} from './componentes/button/button.component';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {BeneficiosComponent} from './componentes/beneficios/beneficios.component';
import {BeneficiosCaixaComponent} from './componentes/beneficios-caixa/beneficios-caixa.component';
import {SuperAppComponent} from './componentes/super-app/super-app.component';
import {DuvidasComponent} from './componentes/duvidas/duvidas.component';
import {FooterComponent} from './componentes/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {OnboardingComponent} from './componentes/onboarding/onboarding.component';
import {ProgressBarModule} from './componentes/progress-bar/progress-bar.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ModalPdfComponent} from './componentes/modal-pdf/modal-pdf.component';
import {ModalDownloadComponent} from './componentes/modal-download/modal-download.component';
import {ModalFatcaComponent} from "./componentes/modal-fatca/modal-fatca.component";
import {MatRadioModule} from "@angular/material/radio";
import {TermoModalComponent} from "./componentes/termo/modal-termo/termo-modal.component";
import {ModalSmsComponent} from "./componentes/sms-validation-code/modal-sms/modal-sms.component";


@NgModule({
    declarations: [
        MobileComponent,
        HeaderComponent,
        ButtonComponent,
        InicioComponent,
        BeneficiosComponent,
        BeneficiosCaixaComponent,
        SuperAppComponent,
        DuvidasComponent,
        FooterComponent,
        OnboardingComponent,
        ModalPdfComponent,
        ModalDownloadComponent,
        ModalFatcaComponent,
        ModalSmsComponent,
        TermoModalComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        MobileRoutingModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        ProgressBarModule,
        FormsModule,
        ReactiveFormsModule,
        PdfViewerModule,
        MatRadioModule,
    ]
})
export class MobileModule {
}
