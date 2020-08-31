import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AuthGuard, MOODLE_ROUTES } from 'moodle-app';

import { HomePage } from './home/home.page';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePage,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    providers: [
        { provide: MOODLE_ROUTES, useValue: routes, multi: true },
    ],
})
export class AppRoutingModule { }
