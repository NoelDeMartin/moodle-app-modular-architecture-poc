import { NgModule } from '@angular/core';

import { MoodleHomePageModule } from './home/home.module';
import { MoodleLoginPageModule } from './login/login.module';

@NgModule({
    imports: [
        MoodleHomePageModule,
        MoodleLoginPageModule,
    ],
})
export class MoodleAppPagesModule { }
