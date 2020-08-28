import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from '../services';

@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService) {}

    async canActivate(): Promise<boolean> {
        if (this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');

            return false;
        }

        return true;
    }

}
