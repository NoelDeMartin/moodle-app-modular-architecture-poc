import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { RequireAuth } from '../services/routing/RequireAuth';
import { RequireGuest } from '../services/routing/RequireGuest';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePage,
        canLoad: [RequireAuth],
    },
    {
        path: 'login',
        component: LoginPage,
        canLoad: [RequireGuest],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class MoodleAppRoutingModule { }
