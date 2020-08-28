import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

export function bootstrapApplication(module) {
    if (environment.production) {
        enableProdMode();
    }

    platformBrowserDynamic()
        .bootstrapModule(module)
        .catch(err => console.log(err));
}

export { MoodleAppRoutingModule, MOODLE_ROUTES } from './app/app-routing.module';
export { MoodleAppComponent } from './app/app.component';
export { MoodleAppModule } from './app/app.module';

export { AuthGuard } from './guards/auth.guard';
export { AuthService } from './services/AuthService';
export { User } from './models/User';
export { UsersService } from './services/UsersService';
