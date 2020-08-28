import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MoodleAppComponentsModule, MoodleLoginPageComponentsModule } from 'moodle-app';

import { LoginPage } from './login.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MoodleAppComponentsModule,
        MoodleLoginPageComponentsModule,
    ],
    declarations: [
        LoginPage,
    ],
})
export class LoginPageModule {}
