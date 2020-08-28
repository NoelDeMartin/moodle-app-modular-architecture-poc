import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';

@Component({
    selector: 'moodle-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class MoodleHomePage {

    public constructor(private auth: AuthService, private router: Router) {}

    public async logout() {
        await this.auth.logout();

        this.router.navigateByUrl('/login');
    }

}
