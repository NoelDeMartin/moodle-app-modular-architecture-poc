import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
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

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class MoodleAppRoutingModule { }
