import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { MoodlePageHeaderComponent } from './page-header/page-header.component';

const components = [
    MoodlePageHeaderComponent,
];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: components,
    exports: components,
})
export class MoodleAppComponentsModule { }
