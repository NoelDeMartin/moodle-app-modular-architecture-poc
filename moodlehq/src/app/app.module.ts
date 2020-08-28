import { MoodleAppModule, UsersService as BaseUserService } from 'moodle-app';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UsersService } from '../services/UsersService';

@NgModule({
    declarations: [AppComponent],
    imports: [MoodleAppModule.forRoot()],
    providers: [
        { provide: BaseUserService, useExisting: UsersService },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
