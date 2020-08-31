import { NgModule } from '@angular/core';

import { MoodleHQModule } from 'moodlehq';
import { UsersService as BaseUsersService } from 'moodlehq';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';

import { UsersService } from '../services/users.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        MoodleHQModule.forRoot(),
        AppRoutingModule,
        HomePageModule,
    ],
    providers: [
        { provide: BaseUsersService, useExisting: UsersService },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
