import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MutationObserverModule} from '@ng-web-apis/mutation-observer';
import {
    TuiButtonModule,
    TuiGroupModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import {MutationObserverPageComponent} from './mutation-observer-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MutationObserverModule,
        TuiButtonModule,
        TuiGroupModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        RouterModule.forChild([{path: '', component: MutationObserverPageComponent}]),
    ],
    declarations: [MutationObserverPageComponent],
})
export class MutationObserverPageModule {}
