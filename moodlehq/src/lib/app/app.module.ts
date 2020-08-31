import { MoodleAppModule, UsersService as BaseUserService } from 'moodle-app';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { PlansPageModule } from './plans/plans.module';
import { LoginPageModule } from './login/login.module';

import { UsersService } from '../services/UsersService';

@NgModule({
    imports: [
        LoginPageModule,
        MoodleAppModule.forRoot(),
        AppRoutingModule,
        HomePageModule,
        PlansPageModule,
    ],
    exports: [
        LoginPageModule,
        MoodleAppModule,
        AppRoutingModule,
        HomePageModule,
        PlansPageModule,
    ],
})
export class MoodleHQModule {

    static forRoot(): ModuleWithProviders<MoodleHQModule> {
        return {
            ngModule: MoodleHQModule,
            providers: [
                { provide: BaseUserService, useExisting: UsersService },
            ],
        };
    }

}
