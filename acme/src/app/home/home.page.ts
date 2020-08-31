import { Component } from '@angular/core';
import { AuthService } from 'moodle-app';

import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public constructor(private auth: AuthService, private router: Router) {}

    public async logout() {
        await this.auth.logout();

        this.router.navigateByUrl('/login');
    }

}
