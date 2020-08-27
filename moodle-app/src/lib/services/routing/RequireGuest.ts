import { CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from '../AuthService';

@Injectable({ providedIn: 'root' })
export class RequireGuest implements CanLoad {

    constructor(private router: Router, private auth: AuthService) {}

    async canLoad(): Promise<boolean> {
        if (this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');

            return false;
        }

        return true;
    }

}
