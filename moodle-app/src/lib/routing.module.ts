import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { RequireAuth } from '../services/routing/RequireAuth';
import { RequireGuest } from '../services/routing/RequireGuest';
import { HomePage } from 'src/app/home/home.page';
import { LoginPage } from 'src/app/login/login.page';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePage,
        // loadChildren: () => import('../app/home/home.module').then(m => m.HomePageModule),
        canLoad: [RequireAuth],
    },
    {
        path: 'login',
        component: LoginPage,
        // loadChildren: () => import('../app/login/login.module').then(m => m.LoginPageModule),
        canLoad: [RequireGuest],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule]
})
export class MoodleRoutingModule { }
