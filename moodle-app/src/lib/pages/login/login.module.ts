import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodleLoginPage } from './login.page';
import { MoodleLoginPageComponentsModule } from './components';
import { MoodleAppComponentsModule } from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MoodleAppComponentsModule,
        MoodleLoginPageComponentsModule,
    ],
    declarations: [
        MoodleLoginPage,
    ],
})
export class MoodleLoginPageModule {}
