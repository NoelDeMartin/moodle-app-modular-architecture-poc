import { CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from 'src/services/AuthService';

@Injectable({ providedIn: 'root' })
export class RequireAuth implements CanLoad {

    constructor(private router: Router, private auth: AuthService) {}

    async canLoad(): Promise<boolean> {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/login');

            return false;
        }

        return true;
    }

}
