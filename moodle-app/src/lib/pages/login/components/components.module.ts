import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { MoodleLoginPageFormComponent } from './form/form.component';
import { MoodleLoginPageHeaderComponent } from './header/header.component';

const components = [
    MoodleLoginPageFormComponent,
    MoodleLoginPageHeaderComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: components,
    exports: components,
})
export class MoodleLoginPageComponentsModule { }
