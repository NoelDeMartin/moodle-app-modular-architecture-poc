import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AuthGuard, MOODLE_ROUTES, GuestGuard } from 'moodle-app';

import { HomePage } from './home/home.page';
import { PlansPage } from './plans/plans.page';
import { LoginPage } from './login/login.page';

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
    {
        path: 'plans',
        component: PlansPage,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    providers: [
        { provide: MOODLE_ROUTES, useValue: routes, multi: true },
    ],
})
export class AppRoutingModule { }
