import { NgModule, Inject, InjectionToken } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';

import { Arr } from '../utils/Arr';
import { AuthGuard, GuestGuard } from '../guards';
import { MoodleLoginPage, MoodleHomePage } from '../pages';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MoodleHomePage,
        canActivate: [AuthGuard],
    },
    {
        path: 'login',
        component: MoodleLoginPage,
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
