import { MoodleAppModule, UsersService as BaseUserService, MOODLE_ROUTES } from 'moodle-app';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { PlansPageModule } from './plans/plans.module';

import { UsersService } from '../services/UsersService';

@NgModule({
    declarations: [AppComponent],
    imports: [
        MoodleAppModule.forRoot(),
        AppRoutingModule,
        HomePageModule,
        PlansPageModule,
    ],
    providers: [
        { provide: BaseUserService, useExisting: UsersService },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
