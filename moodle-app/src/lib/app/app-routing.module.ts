import { NgModule, Inject, InjectionToken } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { Arr } from '../utils/Arr';
import { AuthGuard } from '../guards/auth.guard';
import { GuestGuard } from '../guards/guest.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePage,
        canActivate: [AuthGuard],
    },
    {
        path: 'login',
        component: LoginPage,
        canActivate: [GuestGuard],
    },
];

export const MOODLE_ROUTES = new InjectionToken<Routes>('moodle-app.routes');

@NgModule({
    imports: [
        RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules })
    ],
    providers: [
        { provide: MOODLE_ROUTES, useValue: routes, multi: true },
    ],
    exports: [RouterModule]
})
export class MoodleAppRoutingModule {

    constructor(router: Router, @Inject(MOODLE_ROUTES) applicationRoutes: Routes[]) {
        Arr.flatten(applicationRoutes.reverse()).forEach(route => router.config.push(route));
    }

}
